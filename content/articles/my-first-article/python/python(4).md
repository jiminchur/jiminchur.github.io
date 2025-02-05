---
title: "[파이썬 기초] 튜플과 딕셔너리"
description: "파이썬 기초"
date: "2023-10-05"
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
  - "튜플"
  - "딕셔너리"
---
## 튜플
> 리스트는 []로 되어있지만 튜플은 ()로 되어있다. 튜플의 요소값을 생성, 삭제, 수정이 불가능 하다.
### 튜플 생성
```python
a_tup = ()
b_tup = (1,2,3)
c_tup = ('a','b','c')
d_tup = (1,2,'b','c')
e_tup = (1,2,'b','c',('a','b','c'))
(type(a_tup),type(b_tup),type(c_tup),type(d_tup),type(e_tup))
```
    (tuple, tuple, tuple, tuple, tuple)
```python
a_tup.append(3)
```
    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    c:\python\blog\day2.ipynb Cell 136 line 1
    ----> <a href='vscode-notebook-cell:/c%3A/python/blog/day2.ipynb#Y311sZmlsZQ%3D%3D?line=0'>1</a> a_tup.append(3)


    AttributeError: 'tuple' object has no attribute 'append'
```python
a_tup.extend([1,2,3])
```
    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    c:\python\blog\day2.ipynb Cell 137 line 1
    ----> <a href='vscode-notebook-cell:/c%3A/python/blog/day2.ipynb#Y312sZmlsZQ%3D%3D?line=0'>1</a> a_tup.extend([1,2,3])


    AttributeError: 'tuple' object has no attribute 'extend'
```python
del b_tup[2]
```
    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    c:\python\blog\day2.ipynb Cell 138 line 1
    ----> <a href='vscode-notebook-cell:/c%3A/python/blog/day2.ipynb#Y313sZmlsZQ%3D%3D?line=0'>1</a> del b_tup[2]


    TypeError: 'tuple' object doesn't support item deletion
```python
b_tup[0] = 66
```
    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    c:\python\blog\day2.ipynb Cell 139 line 1
    ----> <a href='vscode-notebook-cell:/c%3A/python/blog/day2.ipynb#Y314sZmlsZQ%3D%3D?line=0'>1</a> b_tup[0] = 66


    TypeError: 'tuple' object does not support item assignment
### 인덱싱
```python
e_tup = (1,2,'b','c',('a','b','c'))
e_tup[0]
```
    1
```python
e_tup[4][0]
```
    'a'
### 슬라이싱
```python
e_tup[:]
```
    (1, 2, 'b', 'c', ('a', 'b', 'c'))
```python
e_tup[:4]
```
    (1, 2, 'b', 'c')
### 튜플연산
* 튜플의 연산은 튜플끼리만 가능하다.
```python
e_tup = (1,2,'b','c',('a','b','c'))
e_tup + [1,2,3]
```
    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    c:\python\blog\day2.ipynb Cell 147 line 3
          <a href='vscode-notebook-cell:/c%3A/python/blog/day2.ipynb#Y321sZmlsZQ%3D%3D?line=0'>1</a> # 튜플의 연산은 튜플끼리만 가능하다.
          <a href='vscode-notebook-cell:/c%3A/python/blog/day2.ipynb#Y321sZmlsZQ%3D%3D?line=1'>2</a> e_tup = (1,2,'b','c',('a','b','c'))
    ----> <a href='vscode-notebook-cell:/c%3A/python/blog/day2.ipynb#Y321sZmlsZQ%3D%3D?line=2'>3</a> e_tup + [1,2,3]


    TypeError: can only concatenate tuple (not "list") to tuple
```python
e_tup + b_tup
```
    (1, 2, 'b', 'c', ('a', 'b', 'c'), 1, 2, 3)
```python
e_tup * 2
```
    (1, 2, 'b', 'c', ('a', 'b', 'c'), 1, 2, 'b', 'c', ('a', 'b', 'c'))
## 딕셔너리
> Key와 Value를 한 쌍으로 갖는 자료형이다.
* {key1:value1, key2:value2, ...}
### 딕셔너리 생성
* 딕셔너리 생성 예제
```python
dic = {"호선":3,"역":"상수역","방향":"정방향"}
dic
```
    {'호선': 3, '역': '상수역', '방향': '정방향'}
```python
dic1 = {
    "subway":[
    {"호선":6,"역":"상수역","방향":"정방향"},
    {"호선":3,"역":"대화역","방향":"역방향"},
    {"호선":3,"역":"백석역","방향":"정방향"}
]
}
dic1
```
    {'subway': [{'호선': 6, '역': '상수역', '방향': '정방향'},
      {'호선': 3, '역': '대화역', '방향': '역방향'},
      {'호선': 3, '역': '백석역', '방향': '정방향'}]}
### 조회
```python
dic = {"호선":3,"역":"상수역","방향":"정방향"}

dic["방향"]
```
    '정방향'
```python
dic1 = {
    "subway":[
    {"호선":6,"역":"상수역","방향":"정방향"},
    {"호선":3,"역":"대화역","방향":"역방향"},
    {"호선":3,"역":"백석역","방향":"정방향"}
]
}
dic1["subway"][0]
```
    {'호선': 6, '역': '상수역', '방향': '정방향'}
```python
dic1["subway"][1]["역"]
```
    '대화역'
### get()
```python
dic = {"호선":3,"역":"상수역","방향":"정방향"}
dic.get("호선")
```
    3
* dic.get("호선") 이랑 dic["호선"]은 같은 값으로 나오지만
* 만약 값이 없는 key를 조회하면 get()은 none으로 결과값이 나오지만
* dic[]은 오류가 발생한다.('KeyError')
### 조건조회
```python
dic = {"호선":3,"역":"상수역","방향":"정방향"}
"화장실" in dic
```
    False
```python
dic = {"호선":3,"역":"상수역","방향":"정방향"}
"호선" in dic
```
    True
### 추가
```python
dic = {"호선":3,"역":"상수역","방향":"정방향"}
dic["화장실"] = "무"
dic
```
    {'호선': 3, '역': '상수역', '방향': '정방향', '화장실': '무'}
```python
# 추가
dic = {"호선":3,"역":"상수역","방향":"정방향"}
dic["화장실"] = {"유무" : "유", "안밖": "안"}
dic
```
    {'호선': 3, '역': '상수역', '방향': '정방향', '화장실': {'유무': '유', '안밖': '안'}}
### 수정
```python
# 수정
dic = {'호선': 3, '역': '상수역', '방향': '정방향', '화장실': {'유무': '유'}}
dic["화장실"] = {"유무" : "유", "안밖": "안"}
dic
```
    {'호선': 3, '역': '상수역', '방향': '정방향', '화장실': {'유무': '유', '안밖': '안'}}
```python
dic = {'호선': 3, '역': '상수역', '방향': '정방향', '화장실': {'유무': '유'}}
dic['화장실']['유무'] = '무'
dic
```
    {'호선': 3, '역': '상수역', '방향': '정방향', '화장실': {'유무': '무'}}
### 삭제
```python
dic = {'호선': 3, '역': '상수역', '방향': '정방향', '화장실': {'유무': '유'}}
del dic['화장실']
dic
```
    {'호선': 3, '역': '상수역', '방향': '정방향'}
### 딕셔너리 함수들
```python
dic = {"층수":8 , "경비실":"있음" , "옥상":"있음"}
dic
```
    {'층수': 8, '경비실': '있음', '옥상': '있음'}

#### keys()
```python
dic = {"층수":8 , "경비실":"있음" , "옥상":"있음"}
dic.keys()
```
    dict_keys(['층수', '경비실', '옥상'])
```python
for i in dic.keys():
    print(i)
```
    층수
    경비실
    옥상
```python
[i for i in dic.keys()]
```
    ['층수', '경비실', '옥상']
```python
list(dic.keys())
```
    ['층수', '경비실', '옥상']
#### values()
```python
dic = {"층수":8 , "경비실":"있음" , "옥상":"있음"}
dic
```
    {'층수': 8, '경비실': '있음', '옥상': '있음'}
```python
dic.values()
```
    dict_values([8, '있음', '있음'])
```python
# values
for i in dic.values() :
    print(i)
```
    8
    있음
    있음
```python
# values
[i for i in dic.values()]
```
    [8, '있음', '있음']
```python
list(dic.values())
```
    [8, '있음', '있음']
#### key, value 쌍 items()
```python
dic = {"층수":8 , "경비실":"있음" , "옥상":"있음"}
dic
```
    {'층수': 8, '경비실': '있음', '옥상': '있음'}
```python
dic.items()
```
    dict_items([('층수', 8), ('경비실', '있음'), ('옥상', '있음')])
```python
for a,b in dic.items() :
    print(f"key:{a} / value:{b}")
```
    key:층수 / value:8
    key:경비실 / value:있음
    key:옥상 / value:있음