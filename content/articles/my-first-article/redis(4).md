---
title: "[Redis] Spring에서 Redis 사용해보기"
description: "Redis"
date: "2024-08-05"
banner:
  src: "../../images/articles/redis/redis_img.png"
  alt: "Redis"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Redis</a></u>'
categories:
  - "Redis"
  - "Spring"  
keywords:
  - "Redis"
  - "단기 심화 부트캠프"
  - "Sparta"
---
## Spring에서 Redis를 사용해보자 
이전 포스팅때에는 Redis의 기초적인 자료형을 배웠다. 본격적인 서비스에 Redis를 적용하기 전, 연습용 SpringBoot 프로젝트에서 활용해 보자. 먼저, Spring Initialzr를 이용하여 Redis를 사용하기 위한 최소한의 프로젝트를 만들어본다.

![스크린샷](../../images/articles/redis/ "com.sprata.redis")

의존성은 사진과 같이 lombok,spring web, spring data redis만 추가를 해주었다.

### application.yml
## Spring Data Repository 써보기
* Item.java
* ItemRepository.java
### 간단한 CRUD 작업을 테스트 코드해보기
* createTest()
* readOneTest()
* updateTest()
* deleteTest()
## RedisTemplate 써보기