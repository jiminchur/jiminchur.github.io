---
title: "[파이썬 기초] 반복문"
description: "파이썬 기초"
date: "2023-10-13"
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
  - "반복문"
---
## 반복문
### for
> list, tuple, str과 같이 인덱싱을 할 수 있는 자료형을 이용해서 반복문을 실행
```python
a_lst = [1,2,3,4,5]
for i in a_lst :
    print(i)
```
    1
    2
    3
    4
    5
```python
a_lst = [1,2,3,4,5]
[i for i in a_lst ]
    
```
    [1, 2, 3, 4, 5]
### for - continue,break,pass
* pass :
    * 실행할 코드가 없는 것으로 다음 행동을 계속해서 진행합니다.
* break :
    * 반복문(loop)을 멈추고 loop밖을 나가도록 합니다.
* continue :
    * 바로 다음 순번의 loop를 수행합니다.
```python
a_lst
```
    [1, 2, 3, 4, 5]
#### pass
```python
for i in a_lst :
    if i % 2 == 0 :
        print(f'i : {i}\n{i}는 짝수입니다.')
        pass
        print("2의 배수기도 하네요.")
    else :
        print(f"i : {i}")
```
    i : 1
    i : 2
    2는 짝수입니다.
    2의 배수기도 하네요.
    i : 3
    i : 4
    4는 짝수입니다.
    2의 배수기도 하네요.
    i : 5
#### continue
```python
for i in a_lst :
    if i % 2 == 0 :
        print(f'i : {i}\n{i}는 짝수입니다.')
        continue
        print("2의 배수기도 하네요.")
    else :
        print(f"i : {i}")
```
    i : 1
    i : 2
    2는 짝수입니다.
    i : 3
    i : 4
    4는 짝수입니다.
    i : 5
#### break
```python
for i in a_lst :
    if i % 2 == 0 :
        print(f'i : {i}\n{i}는 짝수입니다.')
        break
        print("2의 배수기도 하네요.")
    else :
        print(f"i : {i}")
```
    i : 1
    i : 2
    2는 짝수입니다.
### for - else
> for문 실행이 완료되면 else가 실행된다.
#### pass 가 들어간 for-else문
```python
for i in a_lst :
    if i % 2 == 0 :
        print(f'i : {i}\n{i}는 짝수입니다.')
        pass
        print("2의 배수기도 하네요.")
    else :
        print(f"i : {i}")
else :
    print("숫자공부 끝!")
```
    i : 1
    i : 2
    2는 짝수입니다.
    2의 배수기도 하네요.
    i : 3
    i : 4
    4는 짝수입니다.
    2의 배수기도 하네요.
    i : 5
    숫자공부 끝!
#### continue 가 들어간 for-else문
```python
for i in a_lst :
    if i % 2 == 0 :
        print(f'i : {i}\n{i}는 짝수입니다.')
        continue
        # continue 는 다음 조건으로 넘어간다.
        print("2의 배수기도 하네요.")
    else :
        print(f"i : {i}")
else :
    print("숫자공부 끝!")
```
    i : 1
    i : 2
    2는 짝수입니다.
    i : 3
    i : 4
    4는 짝수입니다.
    i : 5
    숫자공부 끝!
#### break 가 들어간 for-else문
```python
for i in a_lst :
    if i % 2 == 0 :
        print(f'i : {i}\n{i}는 짝수입니다.')
        break
        # break는 여기서 함수를 끝낸다.
        print("2의 배수기도 하네요.")
    else :
        print(f"i : {i}")
else :
    print("숫자공부 끝!")
```
    i : 1
    i : 2
    2는 짝수입니다.
### while
```python
b_int = 0
total = 0
while b_int < 10 :
    b_int += 1
    print(f"@ : {b_int}")
    total += b_int

print(total)
```
    @ : 1
    @ : 2
    @ : 3
    @ : 4
    @ : 5
    @ : 6
    @ : 7
    @ : 8
    @ : 9
    @ : 10
    55
```python
a_str = "******"
ind = 0

while ind < len(a_str) :
    print(a_str[ind:])
    ind += 1
```
    ******
    *****
    ****
    ***
    **
    *
### while - continue,break,pass
* for문에서 설명한 것과 동일하다.

