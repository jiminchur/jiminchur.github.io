---
title: "[Redis] Spring Boot 프로젝트에 캐싱 적용하기"
description: "Redis"
date: "2024-08-06"
banner:
  src: "../../../images/articles/redis/redis_img.png"
  alt: "Redis"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Redis</a></u>'
categories:
  - "ALL"
  - "Redis"
keywords:
  - "Redis"
  - "단기 심화 부트캠프"
  - "Sparta"
---
## Spring Cache
캐싱은 Spring 내부에서도 비교적 간단하게 구성할 수 있다. 어노테이션을 통해 기본적인 CRUDS 프로젝트에 적용하는 실습을 해보겠다.
### cacheManager
Redis를 사용하고 있는 만큼, RedisCacheManager를 생성하여 Bean를 등록해 주겠다.

* CacheConfig.java 파일 생성
* `@Configuration`과 `@EnableCaching`추가하기 `@EnableCaching`은 캐싱을 조절할 수 있게 해준다.
```
import static org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair;

@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    public RedisCacheManager cacheManager(
            RedisConnectionFactory redisConnectionFactory
    ) {
        RedisCacheConfiguration configuration = RedisCacheConfiguration
                .defaultCacheConfig()
                .disableCachingNullValues()
                .entryTtl(Duration.ofSeconds(10))
                .computePrefixWith(CacheKeyPrefix.simple())
                .serializeValuesWith(
                        SerializationPair.fromSerializer(RedisSerializer.java())
                );
                
        return RedisCacheManager
                .builder(redisConnectionFactory)
                .cacheDefaults(configuration)
                .build();
    }
}
```
* CacheManager로 진행해도 정상 동작한다.
* 설정 구성을 먼저 진행한다.
* RedisCacheConfiguration configuration = RedisCacheConfiguration.defaultCacheConfig()
  * Redis를 이용해서 Spring Cache를 사용할 때 Redis 관련 설정을 모아두는 클래스
* .disableCachingNullValues()
  * null을 캐싱 할것인지
* .entryTtl(Duration.ofSeconds(10))
  * 기본 캐시 유지 시간 (Time To Live) 지금은 10초
* .computePrefixWith(CacheKeyPrefix.simple())
  * 캐시를 구분하는 접두사 설정
* .serializeValuesWith(SerializationPair.fromSerializer(RedisSerializer.java()));                
  * 캐시에 저장할 값을 어떻게 직렬화 / 역직렬화 할것인지

## 캐싱이 적용되는 어노테이션
대표적인 어노테이션 `@Cacheable`, `@CachePut`, `@CacheEvict`를 알아보고 실습을 해보겠다.
### @Cacheable
#### readOne()
```
@Cacheable(cacheNames = "itemCache", key = "args[0]")
public ItemDto readOne(Long id) {
    log.info("Read One: {}", id);
    return repository.findById(id)
            .map(ItemDto::fromEntity)
            .orElseThrow(() 
                    -> new ResponseStatusException(HttpStatus.NOT_FOUND));
}
```
* cacheNames : 매서드에 의해 만들어지는 캐시의 이름 나중에 캐시된 데이터를 삭제하고 싶다면, 이름을 기억해야한다.
* key : 캐시에서 데이터를 구분하기 위해 활용되는 값, 여기선 SpEL를 사용하는데 지금은 args[0]으로 지적하였다.
#### readAll()
```
@Cacheable(cacheNames = "itemAllCache", key = "methodName")
public List<ItemDto> readAll() {
    return repository.findAll()
            .stream()
            .map(ItemDto::fromEntity)
            .toList();
}
```
* readALL은 지금은 데이터 전부를 돌려주기 때문에 메서드 이름으로 설정을 하였다.
### @CachePut
#### create()
```
@CachePut(cacheNames = "itemCache", key = "#result.id")
public ItemDto create(ItemDto dto) {
    return ItemDto.fromEntity(itemRepository.save(Item.builder()
            .name(dto.getName())
            .description(dto.getDescription())
            .price(dto.getPrice())
            .stock(dto.getStock())
            .build()
    ));
}
```
* Key를 #result.id로 설정을 하여서 반환되는 ItemDto.id를 활용한다는 의미이다. 나중에 readOne 매서드도 그결과를 활용할 수 있다.
* Redis의 저장되는 데이터의 Key지금 readone이랑 같은 형태이므로 만약 create()를 실행한뒤 10초가 지나기 전에 readone()를 한다면 바로 적용된다.
### @CacheEvict
#### update()
```
@CachePut(cacheNames = "itemCache", key = "args[0]")
@CacheEvict(cacheNames = "itemAllCache", allEntries = true)
public ItemDto update(Long id, ItemDto dto) {
    Item item = itemRepository.findById(id)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    item.setName(dto.getName());
    item.setDescription(dto.getDescription());
    item.setPrice(dto.getPrice());
    item.setStock(dto.getStock());
    return ItemDto.fromEntity(itemRepository.save(item));
}
```
* 여기서 추가로 생긴건 @CacheEvict이다. 주어진 정보를 바탕으로 저장된 캐시를 지워준다. 지금은 모든아이템을 저장한 캐시만 지우고 있지만 명확한 하나의 캐시를 지정할 수도 있다. 
* 지우는 이유는 한마디로 말하자면 아이템 정보가 바뀌었으니, 데이터를 전부 돌려준 결과가 더이상 유효하지 않아서 이다.
### 검색결과 캐싱
* RedisApplication에 @EnableSpringDataWebSupport(pageSerializationMode = VIA_DTO) 추가하기
```
@SpringBootApplication
@EnableSpringDataWebSupport(pageSerializationMode = VIA_DTO)
public class RedisApplication {
    // ...
}
```
#### searchByName
```
@Cacheable(
        cacheNames = "itemSearchCache", 
        key = "{ args[0], args[1].pageNumber, args[1].pageSize }"
)
public Page<ItemDto> searchByName(String query, Pageable pageable) {
    return itemRepository.findAllByNameContains(query, pageable)
            .map(ItemDto::fromEntity);
}
```
* 여기서 key는 전달 받은 인자를 바탕으로 만들어 진다.