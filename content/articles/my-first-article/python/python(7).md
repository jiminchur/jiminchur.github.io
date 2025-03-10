---
title: "[파이썬 기초] 조건문"
description: "파이썬 기초"
date: "2023-10-12"
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
  - "조건문"
---
## 조건문
> 조건의 결과에 따라 처리를 다르게 하는 방법

* if 조건문 :
    * 조건이 참이면, 실행
* else :
    * if 조건이 거짓인 경우 실행
```python
a_if = True
if a_if :
    print("a_if는 True입니다.")
else :
    print("너는 거짓이야!")
```
    a_if는 True입니다.
* 한줄로 바꾸는 법
```python
print("a_if는 True입니다.") if a_if else print("너는 거짓이야!")
```
    a_if는 True입니다.
```python
b_if = 5
if b_if > 6 :
    print("짱 크네")
elif b_if <= 6 and b_if >= 3 :
    print("애매하네")
elif b_if < 3 :
    print("작네")
else :
    print("넌 뭐야?!")
```
    애매하네