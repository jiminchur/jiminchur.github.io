---
title: "[SpartaCodingClub] JAVA 단기 심화 부트캠프 TIL (7)"
description: "JAVA 단기 심화 부트캠프"
date: "2024-08-05"
banner:
  src: "../../images/articles/sparta/sparta_img.png"
  alt: "JAVA 단기 심화 부트캠프"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Sparta</a></u>'
categories:
  - "스파르타코딩클럽"
  - "TIL"
keywords:
  - "JAVA" 
  - "단기 심화 부트캠프"
  - "Sparta"
  - "회고"
  - "Redis"
---
## 🔑 2주차의 시작!!
벌써 1주차가 끝나고 2주차의 시작인 월요일이다. 이번주말에는 휴식과 알바를 하며 리프레쉬하는 시간을 가졌다. 지난주에는 MSA강의를 듣고 MSA란 무엇인지 어떻게 작동 되는지를 알아보는 시간을 가졌었다. 이번주 월화에는 Redis에 대해서 공부하고 알아보는 시간을 가져 보도록 하자 우선 알아보기전 코드카타풀이부터 작성해보겠다.

## ✍🏻 오늘의 코드카타
오늘의 코드카타 문제로 [프로그래머스 - Level2 - H-Index](https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=java) 문제를 풀었다.

제한 사항으로는 
* 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
* 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

```
import java.util.Arrays;

public class Solution {

    public static int solution(int[] citations) {
        Arrays.sort(citations);  // 인용 횟수를 오름차순으로 정렬
        int h_index = 0;  // 초기 H-Index 값은 0으로 설정
        
        for (int i = 0; i < citations.length; i++) {
            // 논문의 인덱스(0부터 시작하는 것으로 가정)가 인용 횟수보다 작거나 같으면 H-Index를 업데이트
            if (citations[citations.length - 1 - i] >= (i + 1)) {
                h_index = i + 1;  // H-Index 업데이트
            } else {
                break;  // 논문의 인덱스가 인용 횟수보다 크면 반복을 멈춤
            }
        }
        return h_index;
    }
}
```

## 🤠 인메모리 저장소 및 캐싱 전략 -1 
이번주는 저번주와는 다르게 공부했던 내용을 다른 포스팅글에 적고 여기에다가는 링크만 삽입해볼려고 한다. 그런 다음에 두가지 방법을 비교해 보며 더 좋은 방법으로 앞으로 계속 작성해볼 예정이다.

1. [👉🏻 [Redis] Redis란??](https://jiminchur.github.io/my-first-article/redis1/)

2. [👉🏻 [Redis] Redis Docker로 설치하기](https://jiminchur.github.io/my-first-article/redis2/)

3. [👉🏻 [Redis] Redis 타입 및 명령어 살펴보기](https://jiminchur.github.io/my-first-article/redis3/)

4. [👉🏻 [Redis] Spring에서 Redis 사용해보기](https://jiminchur.github.io/my-first-article/redis4/)

## ✍🏻 오늘 하루를 마무리 하며...
오늘도 MSA때와 마찬가지로 많이 들어본 기술스택이지만 사용해본적은 없던 것이였다. 오늘도 강의를 들을때 재밌고 좋았던 것같다. 지금은 각각의 기술들이 어떻게 작동되는지는 알고 실습을 해봤지만 실제로 내가 프로젝트에 적용할려면 어떻게 해야하고 써야되는 이유를 알아야 한다는 점은 아직 정확하게는 잘 모르는거 같다. 그렇지만 여러번 사용을 해보고 피드백을 받으면 나도 정확하게 사용법을 알고 왜 사용했는지를 설명할 수 있는 날이 올거라 생각이 든다.