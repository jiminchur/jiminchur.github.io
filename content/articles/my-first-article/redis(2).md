---
title: "[Redis] Redis Docker로 설치하기"
description: "Redis"
date: "2024-08-05"
banner:
  src: "../../images/articles/redis/redis_img.png"
  alt: "Redis"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Redis</a></u>'
categories:
  - "Redis"
  - "Docker"
keywords:
  - "Redis"
  - "단기 심화 부트캠프"
  - "Sparta"
---
## Redis 설치하기
Redis를 window방법이나 Mac에서 brew로 이용해서 설치하는 방법들이 있지만 어디에서 설치방법이 동일한 docker로 설치하는 방벙으로 진행을 해볼까 한다. docker에 대해서 어느정도 알고 docker가 설치 되어있다는 가정하에 설명을 해보겠다.

### docker-compose.yml
docker로 특정 프로그램을 설치할때는 버전을 써주는게 제일 좋다. 그렇지만 지금은 학습을 위한 것이므로 lastest버전으로 사용을 해보겠다.
```
services:
  redis-stack:
    image: redis/redis-stack
    container_name: redis-stack-compose
    restart: always
    command: ["redis-server", "--requirepass", "systempass"]
    ports:
      - 6379:6379
      - 8001:8001
```
여기서 자세하게 볼 부분은 image와 command쪽이다.
* redis/redis-stack는 redis/redis-stack-server에 Redis Insight가 추가된 이미지이다. Redis Insight를 같이 사용할려고 하기 때문에 선택을 해주었다.
* redis의 기본 아이디는 `default`이며 비밀번호는 `systempass`이며 만약 비밀번호를 변경하고 싶다면 이부분을 수정하면 된다.

* docker compose up
```
docker compose up -d
```
* redis의 컨테이너가 정상적으로 실행 되었는지 확인
```
docker ps
```

### Intellij IDEA UE에서 연결해보기
1. Database 탭 클릭하기
![스크린샷]( "Intellij IDEA UE")
2. Data Source > "Redis"검색하고 클릭하기
![스크린샷]( "Intellij IDEA UE")
3. Host : localhost / port : 6379 / User : default / Password : systempass 입력 후 연결하기
![스크린샷]( "Intellij IDEA UE")
4. 이제 console창에서 명령어로 데이터 조회,삽입등 수행하면 된다.
![스크린샷]( "Intellij IDEA UE")

## Docker로 Redis Insight 설치하기
만약, Docker로 Redis를 설치하는 과정에서 redis/redis-stack을 선택했을 경우 Redis Insight가 함께 설치되며, 8001 포트를 publish(-p 옵션)하면 접속할 수 있다.

지금은 그게 아니고 Redis Insight를 따로 도커 컨테이너로 띄웠을때를 알아보자

redisinsight 이미지를 그냥 빌드를 하고 실행해서 기존 redis와 연결을 할려고 하면 연결이 되지 않는걸 알수가 있다. 그 이유는 docker의 네트워크 설정을 안해줬기 때문이다.

### 네트워크 설정
네트워크 설정은 생각보다 간단하다. 우선 네트워크를 redis_network이름으로 하나 생성한다.
```
docker network create redis_network
```
다음과 출력 값을 보게 되면 ip주소가 하나 있는데 이걸 나중에 redis insight쪽에 localhost 대신 적어 주면 연결이 된다.
![스크린샷]("redis_network")

* 수정된 docker compose.yml
```
services:
  redis-stack:
    image: redis/redis-stack
    container_name: redis-stack-compose
    restart: always
    command: ["redis-server", "--requirepass", "systempass"]
    ports:
      - 6379:6379
      - 8001:8001
    networks:
      - redis_network

  redisinsight:
    image: redis/redisinsight:latest
    container_name: redisinsight
    ports:
      - 5540:5540
    volumes:
      - redisinsight:/data
    networks:
      - redis_network

volumes:
  redisinsight:

networks:
  redis_network:
```
redis-stack쪽이랑 redisinsight쪽에 networks를 추가 해주고 아래쪽에도 추가적으로 적어 주었다. 추후에 docker compose up을 하게 되면 두개의 컨테이너가 연결된걸 확인 할 수가 있다.

전에 띄웠던 redis를 삭제해주고 다시 docker compose up을 해준뒤 http://localhost:5540/에 접속을 해준다.

위에서도 한번 언급하였는데 기존에 localhost가 적혀 있던 자리에 아까 확인했던 ip주소를 입력하면 된다.

![스크린샷]( "http://localhost:5540/")