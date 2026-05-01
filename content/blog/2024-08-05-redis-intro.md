---
title: "Redis 입문: 인메모리 데이터베이스의 이해와 설치"
date: "2024-08-05"
category: Tech
description: "빠른 응답 속도를 자랑하는 인메모리 데이터베이스 Redis의 핵심 개념과 Docker를 이용한 설치 환경 구축 방법을 정리합니다."
---

서비스의 규모가 커지다 보면 데이터베이스 조회 속도가 병목이 되는 순간이 옵니다. 이때 가장 먼저 떠올리는 해결책이 바로 **Redis**입니다. 오늘은 레디스가 왜 필요한지, 그리고 어떻게 설치하고 시작할 수 있는지 정리해 보았습니다.

### 1. 인메모리 저장소가 왜 필요할까?
일반적인 관계형 데이터베이스(RDB)는 데이터를 디스크(파일 시스템)에 저장합니다. 이는 데이터의 영속성을 보장하지만, 물리적인 디스크 입출력 과정 때문에 속도에 한계가 있습니다.

반면, **Redis**는 데이터를 RAM(메모리)에 저장하는 **In-Memory** 데이터베이스입니다.
*   **속도:** 메모리에 직접 접근하기 때문에 RDB보다 훨씬 빠릅니다.
*   **활용:** 로그인 세션 정보, 장바구니, 실시간 순위표, 캐싱 등 휘발성이 강하면서도 빠른 응답이 필요한 데이터에 적합합니다.

### 2. NoSQL로서의 Redis
Redis는 "Not only SQL"의 약자인 NoSQL의 한 종류로, 그 중에서도 **Key-Value** 구조를 가집니다. Java의 Map이나 Python의 Dictionary와 유사한 방식으로 데이터를 저장하며, 단순한 구조 덕분에 높은 성능과 수평적 확장이 용이합니다.

### 3. Docker로 Redis 설치하기
로컬 환경에 직접 설치하기보다, 어디서나 동일한 환경을 유지할 수 있는 Docker를 추천합니다. 특히 시각화 도구인 **Redis Insight**가 포함된 `redis-stack` 이미지를 사용하면 더욱 편리합니다.

**docker-compose.yml:**
```yaml
services:
  redis-stack:
    image: redis/redis-stack
    container_name: redis-stack-compose
    restart: always
    command: ["redis-server", "--requirepass", "systempass"]
    ports:
      - 6379:6379 # Redis 포트
      - 8001:8001 # Redis Insight 포트
```

설정 후 `docker compose up -d`를 실행하면 설치가 완료됩니다.

### 4. Redis Insight 활용
설치 시 8001번 포트를 열어두었다면, 브라우저에서 `localhost:8001`에 접속하여 GUI 환경에서 데이터를 조회하고 관리할 수 있습니다. IntelliJ IDEA의 Database 탭 기능을 통해서도 간편하게 연결하여 CLI 명령어를 수행할 수 있습니다.

---
레디스는 "빠른 속도"라는 강력한 무기를 가진 대신, 메모리라는 자원의 한계와 휘발성이라는 특성을 잘 이해하고 사용해야 합니다. 다음 포스팅에서는 레디스에서 제공하는 다양한 자료구조들을 어떻게 실무에 활용할 수 있는지 알아보겠습니다.
