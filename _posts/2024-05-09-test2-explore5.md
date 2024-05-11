
---
title: "[완전탐색] 피로도"
description: 피로도
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
[완전탐색 - 피로도](https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=python3)

#### 우선 문제 설명을 보고, 일단 내 생각을 먼저 적어 보자면
* 피로도 시스템으로 던전을 최대 몇개 까지 돌수가 있을지
    * 최소 피로도 : 던전을 들어가기위해 있어야하는 피로도 같거나 커야 한다.
    * 소모 피로도 : 던전을 돌고 소모되는 피로도

#### 코딩 설계하기
1. 

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