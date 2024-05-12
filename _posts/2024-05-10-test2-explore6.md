---
title: "[완전탐색] 전력망을 둘로 나누기"
description: 전력망을 둘로 나누기
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
[완전탐색 - 전력망을 둘로 나누기](https://school.programmers.co.kr/learn/courses/30/lessons/86971?language=python3)

#### 우선 문제 설명을 보고, 일단 내 생각을 먼저 적어 보자면
* n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다.
    * 전선들중 하나를 끊어서 전력망 네트워크를 2개로 분할하려고 한다.
    * 2개로 분리했을때 두개의 네트워크가 갖는 송전탑의 개수가 최대한 비슷하게 맞춰야 하낟.
    * 두개의 네트워크의 송전탑의 갯수의 차이를 리턴하시오
    * 송전탑의 갯수는 n개, 연결 와이어의 개수는 n-1개이다.

#### 코딩 설계하기

#### <문제풀이>
```
def solution(n, wires):
    from collections import defaultdict
    
    def dfs(graph, start, visited):
        # DFS 알고리즘을 사용하여 서브 트리의 노드 수를 계산
        count = 1
        visited[start] = True
        for neighbor in graph[start]:
            if not visited[neighbor]:
                count += dfs(graph, neighbor, visited)
        return count
    
    # 그래프 생성
    graph = defaultdict(list)
    for v1, v2 in wires:
        graph[v1].append(v2)
        graph[v2].append(v1)
    
    min_diff = float('inf')  # 가능한 최대 차이로 초기화
    
    for v1, v2 in wires:
        # 각 간선을 제거하고 두 서브 트리의 노드 수 계산
        graph[v1].remove(v2)
        graph[v2].remove(v1)
        
        visited = [False] * (n + 1)
        count = dfs(graph, v1, visited)
        
        # 두 서브 트리의 노드 수 차이 계산
        diff = abs(count - (n - count))
        min_diff = min(min_diff, diff)
        
        # 제거했던 간선 복구
        graph[v1].append(v2)
        graph[v2].append(v1)
    
    return min_diff

```

#### 정답!!!