---
title: "[완전탐색] 카펫"
description: 카펫
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
[완전탐색 - 카펫](https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=python3)

#### 우선 문제 설명을 보고, 일단 내 생각을 먼저 적어 보자면
* 사각형 카펫이 존재
    * 테두리는 갈색
    * 가운데는 노란색
* 갈색 사각형 갯수, 노란색 갯수만 기억할때, 전체 사각형의 크기 구해라

#### 코딩 설계하기
1. 노란색의 크기가 n*m일때 갈색의 갯수는 2(n+m) + 4가 된다.

#### <문제풀이>
```
def comb(count):
    ab_lst = []
    if count % 2 == 0:
        for i in range(1,count//2+1):
            if count%i == 0:
                ab_lst.append([i,count//i])
    elif count == 1:
        ab_lst.append([1,1])
    else :
        for i in range(1,count//2+1):
            if count%i == 0:
                ab_lst.append([i,count//i])
    return ab_lst

def solution(brown, yellow):
    answer = []
    a_b = (brown-4)/2
    ab_lst = comb(yellow)
    for comb_ab in ab_lst:
        if comb_ab[0]+comb_ab[1] == a_b:
            answer.append(comb_ab[1]+2)
            answer.append(comb_ab[0]+2)
            break
    return answer
```

#### 정답!!!