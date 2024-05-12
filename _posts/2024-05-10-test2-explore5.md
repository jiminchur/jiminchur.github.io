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
    - 오답노트
    - 파이썬
---
#### 문제링크는 아래에 남겨 두었다. 문제 설명은 아래에 들어가서 봐주시길..
[완전탐색 - 피로도](https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=python3)

#### 우선 문제 설명을 보고, 일단 내 생각을 먼저 적어 보자면
* 피로도 시스템으로 던전을 최대 몇개 까지 돌수가 있을지
    * 최소 피로도 : 던전을 들어가기위해 있어야하는 피로도 같거나 커야 한다.
    * 소모 피로도 : 던전을 돌고 소모되는 피로도
* 주어진 제한사항에 따라 던전의 개수가 최대 8개이므로, 모든 순열을 생성하여 각 경우에 대해 탐험할 수 있는 던전 수를 계산한 후, 그 중 최대값을 찾아 반환하면 된다.

#### 완전 탐색(브루트 포스) 방법으로 해결할 수 있으며, 주어진 던전의 개수가 적기 때문에 모든 순열을 고려하는 것이 가능할거 같다.

#### 코딩 설계하기
1. 모든 던전 탐험 순서의 순열을 생성한다.
2. 각 순서대로 던전을 탐험해보며, 주어진 피로도로 탐험할 수 있는 던전의 최대 수를 계산한다.
    * 현재 피로도에서 "최소 필요 피로도" 이상인 던전을 탐험하면, "소모 피로도"만큼 피로도가 감소한다.
    * 현재 피로도로 탐험할 수 없는 던전이 나오면, 그 순서에서의 탐험은 종료하고 탐험한 던전 수를 기록한다.
3. 모든 순서에 대해 탐험한 던전 수 중 최대값을 찾아 반환한다.


#### <문제풀이>
```
from itertools import permutations

def solution(babbling):
    babbling_lst = ["aya", "ye", "woo", "ma"]
    count = 0
    all_babbling_lst = []
    for length in range(1,5):
        for permu in permutations(babbling_lst,length):
            all_babbling_lst.append("".join(permu))
    
    for speak in babbling:
        if speak in all_babbling_lst:
            count += 1
    answer = count
    return answer
```

#### 정답!!!