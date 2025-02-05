---
title: "[파이썬 기초] 예외처리"
description: "파이썬 기초"
date: "2023-10-14"
banner:
  src: "../../../images/articles/python/pythonlogo.png"
  alt: "파이썬 기초"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "Python"
  - "기초"
keywords:
  - "Python"
  - "기초"
  - "예외처리"
---
## try/except
* try :
  * 로직, 기능
* except <오류종류> :
  * try문에서 오류가 발생할때, 실행
```python
try:
  a_err = int('안녕')
  print(a_err)
except ValueError as e:
  print(f'오류 메세지: {e}')
```
    오류 메세지: invalid literal for int() with base 10: '안녕'
## try/except/else/finallytry :
* try :
  - 로직, 기능
* except <오류종류> :
  - try문에서 오류가 발생할때, 실행
* else :
  - try문이 성공할 때 발생
* finally :
  - try문의 결과와 상관없이 실행
## assert
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
* 지금 if문이 참이므로 밑에 exception이 실행 된거임
* 만약 거짓일 경우엔 밑에 "4의 배수입니다."가 프린트 된다.
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

