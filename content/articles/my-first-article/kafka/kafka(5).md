---
title: "[Kafka] Topic, Partition, Segment에 대해서 알아보자"
description: "나혼자 Kafka 레벨업"
date: "2024-12-03"
banner:
  src: "../../../images/articles/kafka/kafka-img.png"
  alt: "나혼자 Kafka 레벨업"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">kafka</a></u>'
categories:
  - "Kafka"
keywords:
  - "Apache Kafka"
  - "Kafka"
  - "Topic"
  - "Partition"
  - "Segment"
---
## Apache Kafka의 주요요소
Apache Kafka의 주요요소중에서 Producer, Consumer, Consumer Group에 대해서 먼저 살펴보자

* Producer
  * 메시지를 생산(Produce)해서 Kafka의 Topic으로 메시지를 보내는 애플리케이션이다.
* Consumer
  * Topic의 메시지를 가져와서 소비(Consume)하는 애플리케이션이다.
* Consumer Group
  * Topic의 메시지를 사용하기 위해 협력하는 Consumer들의 집합이다.

하나의 Consumer는 하나의 Consumer Group에 포함되며, Consumer Gorup내의 Consumer들은 협력하여 Topic의 메시지를 분산 병렬처리한다.

## Producer와 Consumer의 분리 (Decoupling)
Producer와 Consumer의 기본 동작 방식은 다음과 같다. Producer와 Consumer는 서로 알지 못하며, Producer와 Consumer는 각각 고유의 속도로 Commit Log에 Write 및 Read를 수행한다. 다른 Consumer Group에 속한 Consumer들은 서로 관련이 없으며, Commit Log에 있는 Event(Message)를 동시에 다른 위치에서 Read 할 수 있다.

## Kafka Offset
Kafka Offset은 Commit Log 에서 Event의 위치이다. Producer가 Write하는 LOG-END-OFFSET과 Consumer Group의 Consumer가 Read하고 처리한 후 Commit 한 CURRENT-OFFSET과의 차이인 Consumer Lag가 발생할 수 있다.

## Topic, Partition, Segment
1. Logical View
* Topic은 Kafka안에서 메시지가 저장되는 장소이며 논리적인 표현이다.
* Partition은 Commit Log, 하나의 Topic은 하나 이상의 Partition으로 구성 병렬처리 및 Throughput 향상을 위해서 다수의 Partition을 사용한다.
* Segment는 메시지가 저장되는 실제 물리 File, Segment File이 지정된 크기보다 지정된 기간보다 오래되면 새 파일이 열리고 메시지는 새 파일에 추가 된다.
2. Physical View
* Topic 생성시 Partition 개수를 지정하고, 각 Partition은 Broker들에 분산되며 Segment File들로 구성이 된다.
* log.segment.bytes에서 default값은 1GB이고, log.roll.hours에서 default값은 168시간이다.