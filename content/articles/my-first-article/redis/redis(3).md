---
title: "[Redis] Redis 타입 및 명령어 살펴보기"
description: "Redis"
date: "2024-08-05"
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
## Redis에 데이터를 넣어보자
Redis는 전에 포스팅 글에서 설명한거 처럼 Key-value 데이터베이스 이다. 그래서 명령이 key를 바탕으로 동작하게 되며, Value로 사용하고자 하는 자료형에 따라 다른 명령어를 사용하게 된다. 또한 대부분의 명령이 존재하지 않는 key를 이용해도 정상적으로 동작하며, 없는 Key에 데이터를 저장하면 Key를 생성한다.

단, 이미 만든 Key에 해당하는 데이터와 다른 자료형의 명령을 사용하는 경우에는 오류가 발생할 수 있다.

String, list, set, hash, Sorted-set 여러개의 자료형이 있으며 각각 자료형에만 명령어가 작동하고 공용명령어도 존재한다.

### String
> 가장 기본적인 자료형이며, Redis가 Java의 Map<String,String>처럼 작동한다고 생각하고 접근하면 편하다. 저장할 수 있는 최대 크기는 512MB이다.
* SET
  * `SET <key> <value>`: key에 value 문자열 데이터를 저장, `"`으로 공백 구분
```
SET start "hello world"
```
![스크린샷](../../../images/articles/redis/redis-code-1.png "SET")
* GET
  * `GET <key>`: `key`에 저장된 문자열 반환
```
GET start
```
![스크린샷](../../../images/articles/redis/redis-code-2.png "GET")
* INCR
  * `INCR key`: `key`에 저장된 데이터를 1 증가
```
SET user:count 1
GET user:count
-- 더하기
INCR user:count
```
![스크린샷](../../../images/articles/redis/redis-code-3.png "INCR")
* DECR
  * `DECR key`: `key`에 저장된 데이터를 1 감소
```
-- 뺴기
DECR user:count
```
![스크린샷](../../../images/articles/redis/redis-code-4.png "DECR")
* MSET
  * `MSET key value [key value …]`: `key value`의 형태로 주어진 인자들을 각 `key`에 `value`를 저장
```
MSET user:name alex user:email alex@example.com
```
![스크린샷](../../../images/articles/redis/redis-code-5.png "MSET")
* MGET
  * `MGET key [key]`: 주어진 모든 `key`에 해당하는 데이터를 반환.
```
MGET user:name user:email
```
![스크린샷](../../../images/articles/redis/redis-code-6.png "MGET")
### List
> 여러 문자열 데이터를 Linked List의 형태로 보관하는 자료형이다. Linked List이기 때문에, 중간의 데이터 보다는 양끝의 데이터, 즉 스택 또는 큐 처럼 사용할 수 있다. 리스트의 경우 소셜 네트워크에서 많이 사용하는 자료형이다. 대표적으로 X (구 트위터)가 List를 바탕으로 Timeline을 구성했다고 한다.
* LPUSH, RPUSH
  * `LPUSH key value`: `key`에 저장된 리스트의 앞쪽에 `value`를 저장
  * `RPUSH key value`: `key`에 저장된 리스트의 뒤쪽에 `value`를 저장
```
LPUSH user:list alex
LPUSH user:list brad
RPUSH user:list chad
RPUSH user:list dave
```
![스크린샷](../../../images/articles/redis/redis-code-7.png "LPUSH")
* LPOP
  * `LPOP key`: `key`에 저장된 리스트의 앞쪽에서 값을 반환 및 제거
```
LPOP user:list
```
![스크린샷](../../../images/articles/redis/redis-code-8.png "LPOP")
* RPOP
  * `RPOP key`: `key`에 저장된 리스트의 뒤쪽에서 값을 반환 및 제거
```
RPOP user:list
```
![스크린샷](../../../images/articles/redis/redis-code-9.png "RPOP")
* LLEN
  * `LLEN key`: `key`에 저장된 리스트의 길이를 반환
```
-- LLEN 리스트의 크기
LLEN user:list
```
![스크린샷](../../../images/articles/redis/redis-code-10.png "LLEN")
* LRANGE
  * `LRANGE key start end`: `key`의 `start`부터 `end`까지 원소들을 반환
```
-- 범위가 벗어나도 오류가 나진 않는다.
LRANGE user:list 0 3
```
![스크린샷](../../../images/articles/redis/redis-code-11.png "LRANGE")
### Set
> 문자열의 집합이다. 중복된 값은 없고 순서가 존재하지 않는다. 중복 없는 방문 수, 인증 토큰 블랙리스트 등을 구현할때 활용할 수 있다. 
* SADD
  * `SADD key value`: `key`에 저장된 집합에 `value`를 추가
```
SADD user:java alex
SADD user:java brad
SADD user:java chad
```
![스크린샷](../../../images/articles/redis/redis-code-12.png "SADD")
* SREM
  * `SREM key value`: `key`에 저장된 집합의 `value`를 제거
```
SREM user:java alex 
```
![스크린샷](../../../images/articles/redis/redis-code-13.png "SREM")
* SMEMBERS
  * `SMEMBERS key`: `key`에 저장된 집합의 모든 원소를 반환
```
SMEMBERS user:java
```
![스크린샷](../../../images/articles/redis/redis-code-14.png "SMEMBERS")
* SISMEMBER
  * `SISMEMBER key value`: `key`에 저장된 집합에 `value`가 존재하는지 반환
```
SISMEMBER user:java brad // True
SISMEMBER user:java dave // False
```
![스크린샷](../../../images/articles/redis/redis-code-15.png "SMEMBERS - True")
![스크린샷](../../../images/articles/redis/redis-code-16.png "SMEMBERS - False")
* SINTER
  * `SINTER key1 key2`: `key1`과 `key2`에 저장된 집합들의 교집합의 원소들을 반환
```
-- 교집합 합집합
SADD user:python alex
SADD user:python dave
-- 교집합
SINTER user:java user:python
```
![스크린샷](../../../images/articles/redis/redis-code-17.png "SINTER")
* SUNION
  * `SUNION key1 key2`: `key1`과 `key2`에 저장된 집합들의 합집합의 원소들을 반환
```
-- 합집합
SUNION user:java user:python
```
![스크린샷](../../../images/articles/redis/redis-code-18.png "SUNION")
* SINTERCARD
  * `SINTERCARD number key1 [key2 ...]`: `number`개의 `key`에 저장된 집합들의 교집합의 크기를 반환
```
-- 가운데 숫자는 몇개의 집합을 비교할거냐
SINTERCARD 2 user:java user:python
```
![스크린샷](../../../images/articles/redis/redis-code-20.png "SINTERCARD")
### Hash
> Field -Value 쌍으로 이루어진 자료형, Hash 데이터를 가져오기 위해 Key를 사용하고, 이후 다시 Key에 저장된 Hash 데이터에 Field - Value 쌍을 넣어주는 형식으로 동작하게 된다. 장바구니 같은 기능은 사용자별로, 어떤 물품이 몇개나 담겨있는지와 같은 정보가 포함되어야 한다. 사용자 마다 Hash 데이터를 생성하고, 물품 - 갯수 형식으로 데이터를 저장하면 사용자별 장바구니를 쉽게 저장할 수 있다.
* HSET
  * `HSET key field value [field value]`: `key`의 Hash에 `field`에 `value`를 넣는다. 한번에 여러 `field - value` 쌍을 넣어줄 수 있다.
```
HSET user:alex name alex age 25
HSET user:alex major CSE
```
![스크린샷](../../../images/articles/redis/redis-code-21.png "HSET")
![스크린샷](../../../images/articles/redis/redis-code-22.png "HSET")
* HGET
  * `HGET key field`: `key`에 저장된 Hash의 `field`에 저장된 `value`를 반환. 없는 `field`의 경우 `null`
```
HGET user:alex name
HGET user:alex age
```
![스크린샷](../../../images/articles/redis/redis-code-23.png "HGET")
![스크린샷](../../../images/articles/redis/redis-code-24.png "HGET")
* HMGET
  * `HMGET key field [field]`: `key`에 저장된 Hash에서 복수의 `field`에 저장된 `value`를 반환.
```
HMGET user:alex age major
```
![스크린샷](../../../images/articles/redis/redis-code-25.png "HMGET")
* HGETALL
  * `HGETALL key`: `key`에 저장된 Hash에 저장된 `field - value`를 전부 반환.
```
HGETALL user:alex
```
![스크린샷](../../../images/articles/redis/redis-code-26.png "HGETALL")
* HKEYS
  * `HKEYS key`: `key`에 저장된 Hash에 저장된 `field`를 전부 반환
```
HKEYS user:alex
```
![스크린샷](../../../images/articles/redis/redis-code-27.png "HKEYS")
* HLEN
  * `HLEN key`: `key`에 저장된 Hash에 저장된 `field`의 갯수를 반환
```
HLEN user:alex
```
![스크린샷](../../../images/articles/redis/redis-code-28.png "HLEN")
### Sorted set
> 이름처럼 정렬된 집합이다. 기본적으로 Set과 동일하게, 유일한 값들만 유지하지만 여기에 더해 각 값들에 Score라고 하는 실수를 함께 보관한다. 그리고 데이터를 가져올 때, score를 바탕으로 정렬하여 값들을 가져올 수 있다. 대표적으로 리더보드나 Rate Limiter, 즉 순위와 관련된 기능을 만드는데 사용된다.
* Rate Limiter란?? 
  * API 등을 제공할 때 짧은 시간에 지나치게 많은 요청을 막기 위한 기능을 의미한다.
* ZADD
  * `ZADD key score member [score member ...]`: `key`의 Sorted Set에 `score`를 점수로 가진 `member`를 추가, 이미 있는 `member`의 경우 새로운 `score`를 설정
```
ZADD user:ranks 10 alex
ZADD user:ranks 9 brab 11 chad
ZADD user:ranks 9.5 eric
```
![스크린샷](../../../images/articles/redis/redis-code-29.png "ZADD")
* ZINCRBY
  * `ZINCRBY key increment member`: `key`의 Sorted Set의 `member`의 `score`를 `increment` 만큼 증가 (음수를 전달하면 감소)
```
ZINCRBY user:ranks 2 alex
```
![스크린샷](../../../images/articles/redis/redis-code-30.png "ZINCRBY")
* ZRANK
  * `ZRANK key member`: `key`의 Sorted Set의 `member`의 순위를 오름차순 기준으로 0에서 부터 세서 반환
```
ZRANK user:ranks alex
ZRANK user:ranks chad
```
![스크린샷](../../../images/articles/redis/redis-code-31.png "ZRANK")
* ZREVRANK
  * `ZREVRANK key member`: `key`의 Sorted Set의 `member`의 순위를 내림차순 기준으로 0에서 부터 세서 반환
```
ZREVRANK user:ranks alex
```
![스크린샷](../../../images/articles/redis/redis-code-32.png "ZREVRANK")
* ZREVRANGE
  * `ZREVRANGE key start stop`: `key`의 Sorted Set의 `member`들을 `start` 부터 `stop` 순위까지 내림차순 기준으로 반환
```
ZREVRANGE user:ranks 0 2
```
![스크린샷](../../../images/articles/redis/redis-code-33.png "ZREVRANGE")
### 그 외 공용 명령어
* DEL
  * `DEL key`: `key`(와 저장된 데이터)를 제거
```
SET somekey "to be deleted"
DEL somekey
```
![스크린샷](../../../images/articles/redis/redis-code-34.png "DEL - create")
![스크린샷](../../../images/articles/redis/redis-code-35.png "DEL - delete")
* EXPIRE
  * `EXPIRE key seconds`: `key`의 TTL(유효시각)을 `seconds`로 설정, `seconds`초가 지나면 `key` 제거
```
SET expirekey "to be expired"
EXPIRE expirekey 5
```
![스크린샷](../../../images/articles/redis/redis-code-36.png "EXPIRE - create")
![스크린샷](../../../images/articles/redis/redis-code-38.png "EXPIRE - 5 seconds later")
* EXPIRETIME
  * `EXPIRETIME key`: `key`가 만료되는 시각을 `Unix Timestamp`로 반환
```
EXPIRETIME expirekey
```
![스크린샷](../../../images/articles/redis/redis-code-39.png "EXPIRETIME")
* KEYS
  * 만약 저장된 모든 `Key`를 확인
```
KEYS *
```
![스크린샷](../../../images/articles/redis/redis-code-40.png "KEYS")
* FLUSHDB
  * 모든 `Key`를 제거
```
FLUSHDB  
```
![스크린샷](../../../images/articles/redis/redis-code-41.png "FLUSHDB")