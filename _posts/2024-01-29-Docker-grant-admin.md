---
title:  "[Docker] 관리자 권한 부여하기"
description: 관리자 권한 부여하기
post-image: /assets/images/docker.jpeg
categories: 
    - Docker
tag:
    - Docker
    - Admin
---
# usermod

- docker라는 명령어를 입력할때 sudo와 같이 입력해 주어야 한다 sudo를 치지않고 입력할려면 다음과 같이 해주면 된다.

```
sudo usermod -aG docker $USER
```

- 만약 위에 명령어를 사용 후에 그냥 docker가 먹히지 않을 경우 인스턴스를 나갔다가 들어오면 된다.
