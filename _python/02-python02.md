---
title:  "제어문"
permalink: /python/python02/
excerpt: ""
toc: true
---
## 조건문
조건의 결과에 따라 처리를 다르게 하는 방법

if 조건문 :

- 조건이 참이면, 실행

print("조건이 참")

else :

- if 조건이 거짓인 경우 실행

print("조건이 거짓")


```python
a_if = True
if a_if :
    print("a_if는 True입니다.")
else :
    print("너는 거짓이야!")
```

    a_if는 True입니다.



```python
# 한줄로 바꾸는 법
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


## 반복문

### for
list, tuple, str과 같이 인덱싱을 할 수 있는 자료형을 이용해서 반복문을 실행


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
- pass :
실행할 코드가 없는 것으로 다음 행동을 계속해서 진행합니다.
- break :
반복문(loop)을 멈추고 loop밖을 나가도록 합니다.
- continue :
바로 다음 순번의 loop를 수행합니다.


```python
a_lst
```




    [1, 2, 3, 4, 5]




```python
# pass # 
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



```python
# continue # 
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



```python
# break # 
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
for문 실행이 완료되면 else가 실행된다.


```python
# pass 가 들어간 for-else문 # 
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



```python
# continue 가 들어간 for-else문 # 
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



```python
# break 가 들어간 for-else문 # 
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
for문에서 설명한 것과 동일하다.


```python

```

### while - else


```python

```

## Exception(오류)

### ValueError
부적절한 값을 가진 인자를 받았을 때 발생하는 에러


```python
int("aaa")
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    c:\python\gigit_2\day3.ipynb Cell 28 line 1
    ----> <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#X62sZmlsZQ%3D%3D?line=0'>1</a> int("aaa")


    ValueError: invalid literal for int() with base 10: 'aaa'



```python
a_lst = [1,2,3,4]
a_lst.index(8)
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    c:\python\gigit_2\day3.ipynb Cell 29 line 2
          <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#X64sZmlsZQ%3D%3D?line=0'>1</a> a_lst = [1,2,3,4]
    ----> <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#X64sZmlsZQ%3D%3D?line=1'>2</a> a_lst.index(8)


    ValueError: 8 is not in list


### IndexError
인덱스 범위를 벅어나는 경우에 발생하는 에러


```python
a_lst = [1,2,3,4]
a_lst[89]
```


    ---------------------------------------------------------------------------

    IndexError                                Traceback (most recent call last)

    c:\python\gigit_2\day3.ipynb Cell 31 line 2
          <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#X63sZmlsZQ%3D%3D?line=0'>1</a> a_lst = [1,2,3,4]
    ----> <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#X63sZmlsZQ%3D%3D?line=1'>2</a> a_lst[89]


    IndexError: list index out of range


### SyntaxError
파이썬 문법 오류가 발생하는 경우에 발생하는 에러


```python
if True
    print('good')
```


      Cell In[25], line 1
        if True
               ^
    SyntaxError: expected ':'



### NameError
변수 이름을 찾을 수 없는 경우에 발생하는 에러


```python
a = 100
print(b)
```


    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    c:\python\gigit_2\day3.ipynb Cell 35 line 2
          <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#X66sZmlsZQ%3D%3D?line=0'>1</a> a = 100
    ----> <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#X66sZmlsZQ%3D%3D?line=1'>2</a> print(b)


    NameError: name 'b' is not defined


### ZeroDivisionError
0으로 나누려는 경우에 발생하는 에러


```python
10/0
```


    ---------------------------------------------------------------------------

    ZeroDivisionError                         Traceback (most recent call last)

    c:\python\gigit_2\day3.ipynb Cell 37 line 1
    ----> <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#Y100sZmlsZQ%3D%3D?line=0'>1</a> 10/0


    ZeroDivisionError: division by zero


### FileNotFoundError
파일이나 디렉터리에 접근하려 할 때, 해당 파일이나 디렉터리가 없는 경우에 발생하는 에러



```python
open('tasdasd.py', 'r')
```


    ---------------------------------------------------------------------------

    FileNotFoundError                         Traceback (most recent call last)

    c:\python\gigit_2\day3.ipynb Cell 39 line 1
    ----> <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#Y101sZmlsZQ%3D%3D?line=0'>1</a> open('tasdasd.py', 'r')


    File ~\AppData\Roaming\Python\Python311\site-packages\IPython\core\interactiveshell.py:286, in _modified_open(file, *args, **kwargs)
        279 if file in {0, 1, 2}:
        280     raise ValueError(
        281         f"IPython won't let you open fd={file} by default "
        282         "as it is likely to crash IPython. If you know what you are doing, "
        283         "you can use builtins' open."
        284     )
    --> 286 return io_open(file, *args, **kwargs)


    FileNotFoundError: [Errno 2] No such file or directory: 'tasdasd.py'


### TypeError
잘못된 타입을 전달했을 때 발생하는 에러


```python
12 + "hello"
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    c:\python\gigit_2\day3.ipynb Cell 41 line 1
    ----> <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#Y102sZmlsZQ%3D%3D?line=0'>1</a> 12 + "hello"


    TypeError: unsupported operand type(s) for +: 'int' and 'str'


### AttributeError
Attribute(속성)을 참조 또는 대입이 실패한 경우에 발생하는 에러


```python
a_lst = [1,2,3,4]
a_lst.exten(8)
```


    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    c:\python\gigit_2\day3.ipynb Cell 43 line 2
          <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#Y103sZmlsZQ%3D%3D?line=0'>1</a> a_lst = [1,2,3,4]
    ----> <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#Y103sZmlsZQ%3D%3D?line=1'>2</a> a_lst.exten(8)


    AttributeError: 'list' object has no attribute 'exten'


### KeyError
딕셔너리에서 접근하려는 키 값이 없을 때 발생하는 에러


```python
a_dic = {1:2,3:4,5:6}
a_dic[7]
```


    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    c:\python\gigit_2\day3.ipynb Cell 45 line 2
          <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#Y104sZmlsZQ%3D%3D?line=0'>1</a> a_dic = {1:2,3:4,5:6}
    ----> <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#Y104sZmlsZQ%3D%3D?line=1'>2</a> a_dic[7]


    KeyError: 7


## 예외처리

### try/except
try :

- 로직, 기능

except <오류종류> :

- try문에서 오류가 발생할때, 실행


```python
try:
  a_err = int('안녕')
  print(a_err)
except ValueError as e:
  print(f'오류 메세지: {e}')
```

    오류 메세지: invalid literal for int() with base 10: '안녕'


### try/except/else/finallytry :

try :

- 로직, 기능

except <오류종류> :

- try문에서 오류가 발생할때, 실행

else :

- try문이 성공할 때 발생

finally :

- try문의 결과와 상관없이 실행

### assert
- 조건이 False일 때, 발생하는 에러
- 디버깅 모드에서만 작동하지만, 파이썬은 기본 디버깅 모드임


```python
a_int = 8
# 참이므로 assert는 실행 X
assert a_int % 2 == 0, "2의 배수가 아닙니다."

print('2의 배수입니다.')
```

    2의 배수입니다.



```python
a_int = 7
# 거짓이므로 assert가 실행 됬다.
assert a_int % 2 == 0, "2의 배수가 아닙니다."

print('2의 배수입니다.')
```


    ---------------------------------------------------------------------------

    AssertionError                            Traceback (most recent call last)

    c:\python\gigit_2\day3.ipynb Cell 52 line 3
          <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#Y111sZmlsZQ%3D%3D?line=0'>1</a> a_int = 7
    ----> <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#Y111sZmlsZQ%3D%3D?line=2'>3</a> assert a_int % 2 == 0, "2의 배수가 아닙니다."
          <a href='vscode-notebook-cell:/c%3A/python/gigit_2/day3.ipynb#Y111sZmlsZQ%3D%3D?line=4'>5</a> print('2의 배수입니다.')


    AssertionError: 2의 배수가 아닙니다.


### raise error


```python
try :
    a_int = 487
    if a_int % 4 != 0 :
        # 지금 if문이 참이므로 밑에 exception이 실행 된거임
        # 만약 거짓일 경우엔 밑에 "4의 배수입니다."가 프린트 된다.
        raise Exception("4의 배수가 아닙니다.")
    print('4의 배수입니다.')
except Exception as e :
    print(f'에러메세지:{e}')
```

    에러메세지:4의 배수가 아닙니다.


### Exception 만들어서 적용하기


```python
class NotThreeMultipleError(Exception):
  def __init__(self, error_msg):
    super().__init__(error_msg)
```


```python
try:
  x = 5
  if x % 3 != 0:
    raise NotThreeMultipleError('3의 배수가 아닙니다.')
  print('3의 배수 입니다.')
except Exception as e:
  print(f'오류명: {type(e)} / 오류 메세지: {e}')
     
```

    오류명: <class '__main__.NotThreeMultipleError'> / 오류 메세지: 3의 배수가 아닙니다.

