---
title: "[파이썬 기초] 집합"
description: "파이썬 기초"
date: "2023-10-06"
banner:
  src: "../../images/articles/python/pythonlogo.png"
  alt: "파이썬 기초"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "Python"
  - "기초"
keywords:
  - "Python"
  - "기초"
  - "집합"
---
## 집합
>중복을 허용하지 않는다. 순서가 없다.
### 집합 생성
```python
a_set = set([1,2,3,4,5,6,7,7,7,8,9,9])
a_set
```
    {1, 2, 3, 4, 5, 6, 7, 8, 9}
### 교집합
```python
a_set = set([1,2,3,4,5,6,7,7,7,8,9,9])
b_set = set([1,5,1,5,2,4,6,7])
a_set&b_set
```
    {1, 2, 4, 5, 6, 7}
```python
a_set.intersection(b_set)
```
    {1, 2, 4, 5, 6, 7}
### 합집합
```python
a_set = set([1,2,3,4,5,6,7,7,7,8,9,9])
b_set = set([1,5,1,5,2,4,6,7])
a_set|b_set
```
    {1, 2, 3, 4, 5, 6, 7, 8, 9}
```python
a_set.union(b_set)
```
    {1, 2, 3, 4, 5, 6, 7, 8, 9}
### 차집합
```python
a_set = set([1,2,3,4,5,6,7,7,7,8,9,9])
b_set = set([1,5,1,5,2,4,6,7])
a_set - b_set
```
    {3, 8, 9}
```python
a_set.difference(b_set)
```
    {3, 8, 9}
### 추가
```python
a_set = set([1,2,3,4,5,6,7,7,7,8,9,9])
a_set.add(5)
a_set.update([11,22,33])
a_set
```
    {1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33}
### 제거
```python
a_set = set([1,2,3,4,5,6,7,7,7,8,9,9])
a_set.remove(1)
a_set
```
    {2, 3, 4, 5, 6, 7, 8, 9}