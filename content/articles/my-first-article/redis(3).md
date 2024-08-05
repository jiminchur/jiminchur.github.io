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
* GET
```
GET start
```
* INCR
```
SET user:count 1
GET user:count
-- 더하기
INCR user:count
```
* DECR
```
-- 뺴기
DECR user:count
```
* MSET
```
MSET user:name alex user:email alex@example.com
```
* MGET
```
MGET user:name user:email
```
### List
* LPUSH, RPUSH
```
LPUSH user:list alex
LPUSH user:list brad
RPUSH user:list chad
RPUSH user:list dave
```
* LPOP
```
LPOP user:list
```
* RPOP
```
RPOP user:list
```
* LLEN
```
-- LLEN 리스트의 크기
LLEN user:list
```
* LRANGE
```
-- 범위가 벗어나도 오류가 나진 않는다.
LRANGE user:list 0 3
```
### Set
* SADD
```
SADD user:java alex
SADD user:java brad
SADD user:java chad
```
* SREM
```
SREM user:java alex 
```
* SMEMBERS
```
SMEMBERS user:java
```
* SISMEMBER
```
SISMEMBER user:java brad // True
SISMEMBER user:java dave // False
```
* SINTER
```
-- 교집합 합집합
SADD user:python alex
SADD user:python dave
-- 교집합
SINTER user:java user:python
```
* SUNION
```
-- 합집합
SUNION user:java user:python
```
* SINTERCARD
```
-- 가운데 숫자는 몇개의 집합을 비교할거냐
SINTERCARD 2 user:java user:python
```
### Hash
* HSET
```
HSET user:alex name alex age 25
HSET user:alex major CSE
```
* HGET
```
HGET user:alex name
HGET user:alex age
```
* HMGET
```
HMGET user:alex age major
```
* HGETALL
```
HGETALL user:alex
```
* HKEYS
```
HKEYS user:alex
```
* HLEN
```
HLEN user:alex
```
### Sorted set
* ZADD
```
ZADD user:ranks 10 alex
ZADD user:ranks 9 brab 11 chad
ZADD user:ranks 9.5 eric
```
* ZINCRBY
```
ZINCRBY user:ranks 2 alex
```
* ZRANK
```
ZRANK user:ranks alex
ZRANK user:ranks chad
```
* ZREVRANK
```
ZREVRANK user:ranks alex
```
* ZREVRANGE
```
ZREVRANGE user:ranks 0 2
```
### 그 외 공용 명령어
* DEL
```
SET somekey "to be deleted"
DEL somekey
```
* EXPIRE
```
SET expirekey "to be expired"
EXPIRE expirekey 5
```
* EXPIRETIME
```
EXPIRETIME expirekey
```
* KEYS
```
KEYS *
```
* FLUSHDB
```
FLUSHDB  
```