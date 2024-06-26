---
title:  "[Docker] 기본명령어"
description: 기본명령어
post-image: /assets/images/docker.jpeg
categories: 
    - Docker
tag:    
    - Docker
    - 명령어모음집
---
# 기본 명령어
- 아래 명령어들은 권한부여가 된 상태에서 명령어 이다 만약 하지 않았더라면 앞에 sudo를 붙여 주어야 한다.

## 컨테이너 종료하지 않고 나가기
```
ctrl + p,  q
```
## 컨테이너 다시 들어가기
```
docker attach [dockerName]
```
## 컨테이너 정지하기
```
docker stop [dockerName]
```
## 컨테이너 정지상태를 시작하기
```
docker start [dockerName]
```
## 현재 다운로드가 된 이미지들 확인하기
```
docker images
```
## 컨테이너 확인하기
```
# 실행중인 것만 확인하기
docker ps

# 정지중인 것들까지 다같이 확인하기
docker ps -a
```
## 컨테이너 삭제하기
```
docker rm [dockerName]

# 컨테이너 전체 삭제하기
docker rm $(docker ps -a -q)
```
## 이미지 삭제하기
```
docker rmi phpserver:1.0
```