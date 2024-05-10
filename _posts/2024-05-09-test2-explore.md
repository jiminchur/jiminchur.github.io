---
title: "[완전탐색] 최소직사각형"
description: 최소직사각형
post-image: /assets/images/programmers.png
categories:
    - 완전탐색
    - 코딩테스트
tag:
    - 완전탐색
    - 코딩테스트
    - 프로그래머스
---
#### 문제링크는 아래에 남겨 두었다. 문제 설명은 아래에 들어가서 봐주시길..
[완전탐색 - 최소직사각형](https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=python3)

#### 우선 문제 설명을 보고, 일단 내 생각을 먼저 적어 보자면

* 명함의 가로,세로 길이를 알려주고 다 넣을 수 있는 최소 길이 구하기

#### 코딩 설계하기
1. 가로, 세로중 큰값 모아둔 리스트 작은값 모아둔 리스트 
2. 큰값들에서 제일 큰값 뽑기 작은값들에서 제일 큰 값 뽑기

#### <문제풀이>
```
def solution(citations):
    answer = 0
    citations.sort()
    for check in range(citations.__len__()):
        if citations[check] == len(citations[check:]):
            answer = citations[check]
    return answer
```
#### 성공!!