---
title: "[파이썬 기초] 불리언"
description: "파이썬 기초"
date: "2023-10-11"
banner:
  src: "../../../images/articles/python/pythonlogo.png"
  alt: "파이썬 기초"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "ALL"
  - "Python"
keywords:
  - "Python"
  - "기초"
  - "불리언"
---
## 불리언
> 불리언 또는 불(bool)이라고 하며, 참(True)과 거짓(Flase)을 나타내는 자료형이다.

### 자료형별 데이터의 참/거짓
#### 숫자형
```python
a_int = 0
b_int = 1.0
c_int = -1234
d_int = 0.0

bool(a_int),bool(b_int),bool(c_int),bool(d_int)
```
    (False, True, True, False)
#### 문자형
```python
a_str = ""
b_str = "music"
bool(a_str), bool(b_str)
```
    (False, True)
#### 리스트
```python
a_lst = [] 
b_lst = list() # list() -> []
c_lst = [1, 2, 3]
d_lst = ['a', 'b']

bool(a_lst), bool(b_lst), bool(c_lst), bool(d_lst)
```
    (False, False, True, True)

##### 꼬일수 있는 경우?
```python
ab_lst = [0,""] # -> True 이지만
ab_lst[0], ab_lst[1] # -> 은 각각 False이다.
# 리스트에서는 값이 하나있는 경우에 ac_lst = [123] 이지만
# 튜플에서는 뒤에 콤마을 붙여주어야 한다. ax_lst = (123,)
```
    (0, '')
* 리스트에서는 값이 하나있는 경우에 ac_lst = [123] 이지만
* 튜플에서는 뒤에 콤마을 붙여주어야 한다. ax_lst = (123,)
#### 튜플
```python
a_tup = ()
b_tup = tuple()
c_tup = (1,)
d_tup = (1, 2, 3)

bool(a_tup), bool(b_tup), bool(c_tup), bool(d_tup)
```
    (False, False, True, True)
#### 딕셔너리
```python
a_dic = {} 
b_dic = dict() 
c_dic = {'a':1}

bool(a_dic), bool(b_dic), bool(c_dic)
```
    (False, False, True)
#### 집합
```python
a_set = set() 
b_set = set([1, 2, 3])
c_set = set(['a', 'b'])

bool(a_set), bool(b_set), bool(c_set)
```
    (False, True, True)