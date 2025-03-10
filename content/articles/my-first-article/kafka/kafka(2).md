---
title: "[Kafka] Kafka 실습하기 (1)"
description: "JAVA 단기 심화 부트캠프"
date: "2024-08-16"
banner:
  src: "../../../images/articles/kafka/kafka-img.png"
  alt: "JAVA 단기 심화 부트캠프"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">kafka</a></u>'
categories:
  - "ALL"
  - "Kafka"
keywords:
  - "단기 심화 부트캠프"
  - "Sparta"
  - "Kafka"
---
## 👉🏻 이젠 실습으로~
전의 블로그 글에선 이론을 공부를 했으니 이젠 실습을 진행해보자 Kafka는 Docker Compose를 사용하여 컨테이너를 생성할거고 Kafka UI도 사용할 예정이기 때문에 나중에 만들 Application를 만들때 서버포트 충돌이 나지 않게 유의해서 실습을 진행해야 한다. 우리는 총 2개의 Application을 생성할거고 하나는 Consumer Application, 다른 하나는 Producer Application을 생성해서 토픽과 그룹을 지정해둘때 어떻게 전달되는지를 알아보는 실습을 진행할 것이다.

## Kafka 설치하기
* docker-compose.yml
```
version: '3.8'
services:
  zookeeper:
    image: wurstmeister/zookeeper:3.4.6
    platform: linux/amd64
    ports:
      - "2181:2181"
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  kafka:
    image: wurstmeister/kafka:latest
    platform: linux/amd64
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_LISTENERS: INSIDE://kafka:29092,OUTSIDE://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: INSIDE:PLAINTEXT,OUTSIDE:PLAINTEXT
      KAFKA_LISTENERS: INSIDE://0.0.0.0:29092,OUTSIDE://0.0.0.0:9092
      KAFKA_INTER_BROKER_LISTENER_NAME: INSIDE
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

  kafka-ui:
    image: provectuslabs/kafka-ui:latest
    platform: linux/amd64
    ports:
      - "8080:8080"
    environment:
      KAFKA_CLUSTERS_0_NAME: local
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka:29092
      KAFKA_CLUSTERS_0_ZOOKEEPER: zookeeper:2181
      KAFKA_CLUSTERS_0_READONLY: "false"
```
> Kafka설정과 Zookeeper까지 넣어줬고, 위에서 언급했다싶이 kafka-ui도 사용할 예정이여서 넣어줬다. 여기서 kafka-ui의 서버포트를 8080으로 지정해줬는데 나중에 Application의 서버포트와 충돌이 날 수가있다. 여기서 외부포트를 변경해줘도 상관없고 Application의 포트를 변경해줘도 상관이 없다.
* Docker compose up하기
```
docker compose up -d
```
* localhost:8080 에 접속해보기
![스크린샷](../../images/articles/kafka/first-kafka-ui.png "kafka-ui")

## Producer Application 생성하기

* start.spring.io 에 접속하여 프로젝트를 생성하기
![스크린샷](../../images/articles/kafka/spring-io-producer.png "start.spring.io - Producer")

* application.properties 파일 삭제하고 application.yml 파일 생성하기
```
spring:
  application:
    name: producer
  kafka:
    bootstrap-servers: localhost:9092
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.apache.kafka.common.serialization.StringSerializer
server:
  port: 8090
```
> 위에 kafka-ui와 서버포트가 겹치지 않게 8090으로 설정을 해놓았다.

* ProducerApplicationKafkaConfig.java 생성하기 
```
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class ProducerApplicationKafkaConfig {
    @Bean
    public ProducerFactory<String, String> producerFactory() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        return new DefaultKafkaProducerFactory<>(configProps);
    }

    @Bean
    public KafkaTemplate<String, String> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }
}
```
* ProducerController.java 생성하기
```
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ProducerController {

    private final ProducerService producerService;

    @GetMapping("/send")
    public String sendMessage(@RequestParam("topic") String topic,
                              @RequestParam("key") String key,
                              @RequestParam("message") String message) {
        producerService.sendMessage(topic, key, message);
        return "Message sent to Kafka topic";
    }
}
```
* ProducerService.java 생성하기
```
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProducerService {

    private final KafkaTemplate<String, String> kafkaTemplate;


    public void sendMessage(String topic , String key, String message) {
        for (int i = 0; i < 10; i++) {

            kafkaTemplate.send(topic, key, message + " " + i);
        }

    }
}
```
> message를 여러번 보내기 위해 for문으로 10번 보내는 코드를 구현하였다.

## Consumer Application 생성하기
* start.spring.io 에 접속하여 프로젝트를 생성하기
![스크린샷](../../images/articles/kafka/spring-io-consumer.png "start.spring.io - Consumer")

* application.properties 파일 삭제하고 application.yml 파일 생성하기
```
spring:
  application:
    name: consumer
  kafka:
    bootstrap-servers: localhost:9092
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.apache.kafka.common.serialization.StringSerializer
server:
  port: 8091
```

* ConsumerApplicationKafkaConfig.java 생성하기
```
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

import java.util.HashMap;
import java.util.Map;

@EnableKafka 
@Configuration 
public class ConsumerApplicationKafkaConfig {
    
    @Bean
    public ConsumerFactory<String, String> consumerFactory() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        return new DefaultKafkaConsumerFactory<>(configProps);
    }
    
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, String> kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, String> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        return factory;
    }
}
```

* ConsumerService.java 생성하기
```
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class ConsumerService {

    @KafkaListener(groupId = "group_a", topics = "topic1")
    public void consumeFromGroupA(String message) {
        log.info("Group A consumed message from topic1: " + message);
    }

    @KafkaListener(groupId = "group_b", topics = "topic1")
    public void consumeFromGroupB(String message) {
        log.info("Group B consumed message from topic1: " + message);
    }

    @KafkaListener(groupId = "group_c", topics = "topic2")
    public void consumeFromTopicC(String message) {
        log.info("Group C consumed message from topic2: " + message);
    }

    @KafkaListener(groupId = "group_c", topics = "topic3")
    public void consumeFromTopicD(String message) {
        log.info("Group C consumed message from topic3: " + message);
    }

    @KafkaListener(groupId = "group_d", topics = "topic4")
    public void consumeFromPartition0(String message) {
        log.info("Group D consumed message from topic4: " + message);
    }
}
```

## 실행하기
이제 Consumer와 Producer Application을 실행하고, kafka-ui를 확인해보자
* Consumers 탭
![스크린샷](../../images/articles/kafka/first-play-consumer-ui.png "Consumers 탭")
* Topics 탭
![스크린샷](../../images/articles/kafka/first-play-topic-ui.png "Topics 탭")
> 우리가 Application을 생성할때 작성해놓은 topics와 Consumers가 생성되어 있는 걸 확인 해볼 수가 있다.

### Talend로 test하기
우선 우리가 생성한 Topics가 아닌 topic-test로 생성해서 잘 전송이 되는지 확인을 해보자
![스크린샷](../../images/articles/kafka/request1-4-talend-ui.png "Talend - topic-test")

이제 다시 Kafka-ui로 이동해서 확인해보면

* Topics 탭
![스크린샷](../../images/articles/kafka/testtopic-create-4-topic-ui.png "Topics 탭 - topic-test")

* Consumers 탭
![스크린샷](../../images/articles/kafka/testtopic-message.png "Consumers 탭 - topic-test")

> test-topic이 생성되고 우리가 작성했던 message는 10번 반복해서 전송이 되었다는걸 확인해볼 수가 있다.

다음 포스팅때는 우리가 생성해놓은 topic1-4를 test를 진행해볼건데 같은 토픽의 다른 그룹, 같은 그룹의 다른 토픽,...등 4가지의 경우의 수를 따져가면서 한번 test를 진행해볼 예정이다.