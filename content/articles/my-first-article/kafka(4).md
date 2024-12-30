---
title: "[Kafka] Apache Kafka란??"
description: "나혼자 Kafka 레벨업"
date: "2024-12-02"
banner:
  src: "../../images/articles/kafka/kafka-img.png"
  alt: "나혼자 Kafka 레벨업"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">kafka</a></u>'
categories:
  - "Kafka"
keywords:
  - "Apache Kafka"
  - "Kafka"
---
## Apache Kafka란 무언인가??
Apache Kafka란 "Data in Motion Platform for Enterprise"라고 할 수 있고 "Real-time Event Streams"라고 할수 있다.

### Event란??
Event란 Something Happend!! 즉, Event는 비즈니스에서 일어나는 모든 일, 데이터를 의미한다.

예를 들어보면 다음과 같다.
* 웹사이트에서 무언가를 클릭하는 것
* 청구서를 발행
* 송금
* 배송 물건의 위치 정보
* 택시의 GPS 좌표
* 센서의 온도/압력 데이터

### 그렇다면 Event Stream은 무엇인가??
연속적인 많은 이벤트들의 흐름이라고 할 수 있다. Event는 BigData의 특징을 가지며 비즈니스의 모든 영역에서 광범위하게 발생한다. 대용량의 데이터 Big Data도 발생시킨다. 결국 Event Stream은 연속적인 많은 이벤트들의 흐름을 의미한다.

### Apache Kafka의 3가지 특징을 한번 알아보자
1. 이벤트 스트림을 안전하게 전송하는 Publish & Subscribe
2. 이벤트 스트림을 디스크에 저장하는 Write to Disk
3. 이벤트 스트림을 분석 및 처리하는 Processing & Ananlysis

## Apache Kafka의 탄생
LinkedIn 내에서 개발하였다. 하루 4.5조개의 이벤트 스트림을 처리하고 하루 3000억개 이상의 사용자 관련 이벤트 스트림을 처리한다. 기존의 Messaging Platform으로 처리가 불가능하여 이벤트 스트림을 처리하기 위해 개발이 되었다. 2011년에 Apache Software Foundation에 기부되어 오픈소스화 되었다.

## Apache Kafka 이름의 기원
Franz Kafka에서 가져온 이름이며 창시자인 Jay Kreps가 명명하였다. 

Kafka는 쓰기(Write)에 최적화된 시스템이기 때문에 작가(Writer)의 이름을 사용하는 것이 의미가 있다고 생각했다. Jay Kreps는 대학에서 문학 수업을 많이 들었고 Franz Kafka를 좋아했다. 게다가 오프소스 프로젝트에 대해 그 이름은 멋지게 들렸다. 그래서 기본적으로 관계가 많지 않다.

## Apache Kafka 사용 사례
Event(메세지/데이터)가 사용되는 모든곳에 이용된다. 예를 들면 다음과 같다.
- Messaging System
- IOT 디바이스로 부터 데이터 수집
- 애플리케이션에서 발생하는 로그 수집
- Realtime Event Stream Processing (Fraud Detection, 이상 감지 등)
- DB 동기화 (MSA 기반의 분리된 DB간 동기화)
- 실시간 ETL
- Spark, Flink, Storm, Hadoop과 같은 빅데이터 기술과 같이 사용

### 산업 분야별 Apache Kafka 사용사례를 살펴보자!
- 교통
    - 운전자-탑승자 매치
    - 도착예상시간(ETA)업데이트
    - 실시간 차량 진단
- 금융
    - 사기 감지, 중복 거래 감지
    - 거래, 위험 시스템
    - 모바일 애플리케이션 / 고객 경험
- 오락
    - 실시간 추천
    - 사기 감지
    - In-App 구매
- 온라인 마켓
    - 실시간 재고 정보
    - 대용량 주문의 안전한 처리

