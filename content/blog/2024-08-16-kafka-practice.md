---
title: "Kafka 실습: Docker와 Spring Boot로 구축하는 메시징 시스템"
date: "2024-08-16"
category: Tech
description: "Docker Compose를 이용해 카프카 환경을 구축하고, Spring Boot로 프로듀서와 컨슈머를 직접 구현해 봅니다."
---

이론을 넘어 실제 카프카 환경을 구축하고 메시지를 주고받는 실습을 진행해 보겠습니다. Docker Compose를 활용해 로컬 환경을 세팅하고, Spring Boot 애플리케이션으로 프로듀서(Producer)와 컨슈머(Consumer)를 구현해 보는 과정입니다.

### 1. Kafka 환경 구축 (Docker Compose)
먼저 Kafka 브로커와 Zookeeper, 그리고 시각화 도구인 Kafka-UI를 한꺼번에 띄워보겠습니다.

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  zookeeper:
    image: wurstmeister/zookeeper:3.4.6
    ports:
      - "2181:2181"

  kafka:
    image: wurstmeister/kafka:latest
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_LISTENERS: INSIDE://kafka:29092,OUTSIDE://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: INSIDE:PLAINTEXT,OUTSIDE:PLAINTEXT
      KAFKA_LISTENERS: INSIDE://0.0.0.0:29092,OUTSIDE://0.0.0.0:9092
      KAFKA_INTER_BROKER_LISTENER_NAME: INSIDE
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181

  kafka-ui:
    image: provectuslabs/kafka-ui:latest
    ports:
      - "8080:8080"
    environment:
      KAFKA_CLUSTERS_0_NAME: local
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka:29092
      KAFKA_CLUSTERS_0_ZOOKEEPER: zookeeper:2181
```

설치 후 `docker compose up -d`를 실행하고 `localhost:8080`에 접속하면 Kafka-UI를 통해 클러스터 상태를 한눈에 볼 수 있습니다.

### 2. 프로듀서(Producer) 구현
메시지를 생성해서 카프카로 보내는 스프링 부트 애플리케이션입니다.

**application.yml:**
```yaml
spring:
  kafka:
    bootstrap-servers: localhost:9092
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.apache.kafka.common.serialization.StringSerializer
server:
  port: 8090
```

**Service 코드 예시:**
```java
@Service
@RequiredArgsConstructor
public class ProducerService {
    private final KafkaTemplate<String, String> kafkaTemplate;

    public void sendMessage(String topic, String key, String message) {
        // 테스트를 위해 10번 반복 전송
        for (int i = 0; i < 10; i++) {
            kafkaTemplate.send(topic, key, message + " " + i);
        }
    }
}
```

### 3. 컨슈머(Consumer) 구현
카프카 토픽에서 메시지를 가져와 처리하는 애플리케이션입니다.

**Service 코드 예시:**
```java
@Service
@Slf4j
public class ConsumerService {
    @KafkaListener(groupId = "group_a", topics = "topic1")
    public void consume(String message) {
        log.info("Received message: " + message);
    }
}
```

### 4. 테스트 결과 확인
애플리케이션 실행 후 API를 통해 메시지를 전송하면, Kafka-UI의 **Topics** 탭에서 실시간으로 메시지가 쌓이는 것을 확인할 수 있고, 컨슈머 로그를 통해 성공적으로 수신된 것을 볼 수 있습니다.

![Kafka UI Topics](/images/articles/kafka/testtopic-create-4-topic-ui.png)

---
직접 손으로 구축해 보니 이론으로만 듣던 파티션과 그룹의 개념이 훨씬 명확해졌습니다. 다음 포스팅에서는 여러 개의 컨슈머 그룹이 동일한 토픽을 어떻게 나눠서 처리하는지, 시나리오별 테스트 결과를 정리해 보겠습니다.
