---
title: "[Redis] Redis 타입 및 명령어 살펴보기"
description: "Redis"
date: "2024-08-05"
banner:
  src: "../../images/articles/redis/redis_img.png"
  alt: "Redis"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Redis</a></u>'
categories:
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
* SET
```
SET start "hello world"
```
![스크린샷](../../images/articles/redis/redis-code-1.png "SET")
* GET
```
GET start
```
![스크린샷](../../images/articles/redis/redis-code-2.png "GET")
* INCR
```
SET user:count 1
GET user:count
-- 더하기
INCR user:count
```
![스크린샷](../../images/articles/redis/redis-code-3.png "INCR")
* DECR
```
-- 뺴기
DECR user:count
```
![스크린샷](../../images/articles/redis/redis-code-4.png "DECR")
* MSET
```
MSET user:name alex user:email alex@example.com
```
![스크린샷](../../images/articles/redis/redis-code-5.png "MSET")
* MGET
```
MGET user:name user:email
```
![스크린샷](../../images/articles/redis/redis-code-6.png "MGET")
### List
* LPUSH, RPUSH
```
LPUSH user:list alex
LPUSH user:list brad
RPUSH user:list chad
RPUSH user:list dave
```
![스크린샷](../../images/articles/redis/redis-code-7.png "LPUSH")
* LPOP
```
LPOP user:list
```
![스크린샷](../../images/articles/redis/redis-code-8.png "LPOP")
* RPOP
```
RPOP user:list
```
![스크린샷](../../images/articles/redis/redis-code-9.png "RPOP")
* LLEN
```
-- LLEN 리스트의 크기
LLEN user:list
```
![스크린샷](../../images/articles/redis/redis-code-10.png "LLEN")
* LRANGE
```
-- 범위가 벗어나도 오류가 나진 않는다.
LRANGE user:list 0 3
```
![스크린샷](../../images/articles/redis/redis-code-11.png "LRANGE")
### Set
* SADD
```
SADD user:java alex
SADD user:java brad
SADD user:java chad
```
![스크린샷](../../images/articles/redis/redis-code-12.png "SADD")
* SREM
```
SREM user:java alex 
```
![스크린샷](../../images/articles/redis/redis-code-13.png "SREM")
* SMEMBERS
```
SMEMBERS user:java
```
![스크린샷](../../images/articles/redis/redis-code-14.png "SMEMBERS")
* SISMEMBER
```
SISMEMBER user:java brad // True
SISMEMBER user:java dave // False
```
![스크린샷](../../images/articles/redis/redis-code-15.png "SMEMBERS - True")
![스크린샷](../../images/articles/redis/redis-code-16.png "SMEMBERS - False")
* SINTER
```
-- 교집합 합집합
SADD user:python alex
SADD user:python dave
-- 교집합
SINTER user:java user:python
```
![스크린샷](../../images/articles/redis/redis-code-17.png "SINTER")
* SUNION
```
-- 합집합
SUNION user:java user:python
```
![스크린샷](../../images/articles/redis/redis-code-18.png "SUNION")
* SINTERCARD
```
-- 가운데 숫자는 몇개의 집합을 비교할거냐
SINTERCARD 2 user:java user:python
```
![스크린샷](../../images/articles/redis/redis-code-20.png "SINTERCARD")
### Hash
* HSET
```
HSET user:alex name alex age 25
HSET user:alex major CSE
```
![스크린샷](../../images/articles/redis/redis-code-21.png "HSET")
![스크린샷](../../images/articles/redis/redis-code-22.png "HSET")
* HGET
```
HGET user:alex name
HGET user:alex age
```
![스크린샷](../../images/articles/redis/redis-code-23.png "HGET")
![스크린샷](../../images/articles/redis/redis-code-24.png "HGET")
* HMGET
```
HMGET user:alex age major
```
![스크린샷](../../images/articles/redis/redis-code-25.png "HMGET")
* HGETALL
```
HGETALL user:alex
```
![스크린샷](../../images/articles/redis/redis-code-26.png "HGETALL")
* HKEYS
```
HKEYS user:alex
```
![스크린샷](../../images/articles/redis/redis-code-27.png "HKEYS")
* HLEN
```
HLEN user:alex
```
![스크린샷](../../images/articles/redis/redis-code-28.png "HLEN")
### Sorted set
* ZADD
```
ZADD user:ranks 10 alex
ZADD user:ranks 9 brab 11 chad
ZADD user:ranks 9.5 eric
```
![스크린샷](../../images/articles/redis/redis-code-29.png "ZADD")
* ZINCRBY
```
ZINCRBY user:ranks 2 alex
```
![스크린샷](../../images/articles/redis/redis-code-30.png "ZINCRBY")
* ZRANK
```
ZRANK user:ranks alex
ZRANK user:ranks chad
```
![스크린샷](../../images/articles/redis/redis-code-31.png "ZRANK")
* ZREVRANK
```
ZREVRANK user:ranks alex
```
![스크린샷](../../images/articles/redis/redis-code-32.png "ZREVRANK")
* ZREVRANGE
```
ZREVRANGE user:ranks 0 2
```
![스크린샷](../../images/articles/redis/redis-code-33.png "ZREVRANGE")
### 그 외 공용 명령어
* DEL
```
SET somekey "to be deleted"
DEL somekey
```
![스크린샷](../../images/articles/redis/redis-code-34.png "DEL - create")
![스크린샷](../../images/articles/redis/redis-code-35.png "DEL - delete")
* EXPIRE
```
SET expirekey "to be expired"
EXPIRE expirekey 5
```
![스크린샷](../../images/articles/redis/redis-code-36.png "EXPIRE - create")
![스크린샷](../../images/articles/redis/redis-code-38.png "EXPIRE - 5 seconds later")
* EXPIRETIME
```
EXPIRETIME expirekey
```
![스크린샷](../../images/articles/redis/redis-code-39.png "EXPIRETIME")
* KEYS
```
KEYS *
```
![스크린샷](../../images/articles/redis/redis-code-40.png "KEYS")
* FLUSHDB
```
FLUSHDB  
```
![스크린샷](../../images/articles/redis/redis-code-41.png "FLUSHDB")