---
title: "[대규모 시스템] 동시 접속자와 초당 요청량"
description: "JAVA 단기 심화 부트캠프"
date: "2024-08-13"
banner:
  src: "../../../images/articles/large-scale/large-scale-img.jpeg"
  alt: "JAVA 단기 심화 부트캠프"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Pinterest</a></u>'
categories:
  - "ALL"
  - "대규모 시스템"
keywords:
  - "JAVA" 
  - "단기 심화 부트캠프"
  - "Sparta"
  - "TIL"
---
## 🧐 대규모 시스템을 설계할 때 가장 중요한 요소 중 하나는 사용자 수이다.
얼마나 많은 사용자가 시스템을 사용하는지 파악하는 것은 중요하다. 시스템 모니터링을 통해 하루에 몇명이 접속하는지 알 수 있다. 그러나 단순히 하루 접속량을 파악하는 것만으로도 충분하지 않다. 더 중요한건 동시 접속자의 요청 수이다.

## 🤓 TPS란 무엇일까??
TPS는 Transactions Per Second의 줄임말로 초당 처리되는 트랜잭션의 수를 나타내는 지표이다. 이는 시스템의 성능을 평가하는 중요한 지표 중 하나로 대규모시스템에서 중요한 역할을 한다. TPS는 시스템이 얼마나 많은 요청을 동시에 처리할 수 있는지를 나타내며 시스템의 처리 능력을 가늠할 수 있게 해준다.

## 👊🏻 시스템이 TPS을 견딜 수 있어야 한다.
처음에 얘기한것처럼 일일 접속량이 아닌 특정 시간대 초당 접속자 요청량이 가장 많은 시간대를 파악해야 한다. 이 정보는 시스템의 용량 계획을 세우는데 매우 중요하다.

예를 들어 보자, 오후 6시에 초당 200건의 요청을 처리했다고 하면 우리는 1.5배 정도인 300건을 처리 할 수 있도록 시스템을 설계하는게 바람직하다. 이는 예기치 않게 트래픽 급증에도 견딜 수 있는 여유를 제공할 것이다.

## 😱 더 예상치 못한 요청이 몰린다면?? 
위에 예시처럼 200건이 들어왔지만 우리는 300건을 처리할수 있도록 준비를 했다고 하자 그런데 갑자기 1000건의 요청이 들어 온다면 시스템이 중단될 수가 있다. 이러한 상황을 대비해서 다양한 방법을 고려해야 한다. 

1. 애플리케이션 수 확장
2. 오류상황에도 사용자가 대기할 수 있도록 대기열 설정
3. 오토 스케일링을 통해 시스템의 자원을 동적으로 할당하여 부하를 분산

이러한 방법들을 통해 시스템의 안정성을 높일 수 있다.


