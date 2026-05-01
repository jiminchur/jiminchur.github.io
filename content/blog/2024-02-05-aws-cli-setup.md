---
title: "AWS CLI 설정: 터미널에서 인스턴스 자유자재로 다루기"
date: "2024-02-05"
category: Tech
description: "GUI가 아닌 터미널(CLI) 환경에서 AWS EC2 인스턴스를 효율적으로 관리하기 위한 초기 설정과 필수 명령어들을 정리합니다."
---

AWS 리소스를 관리할 때 매번 브라우저를 켜고 콘솔에 접속하는 것은 번거로운 일입니다. AWS CLI(Command Line Interface)를 활용하면 터미널에서 명령 한 줄로 인스턴스를 생성하고, 확인하고, 제어할 수 있습니다. 오늘은 그 첫 단계인 초기 설정법과 자주 쓰는 EC2 관리 명령어를 알아보겠습니다.

### 1. AWS CLI 설치 및 인증 설정
먼저 AWS 공식 문서를 참조하여 자신의 OS에 맞는 CLI 도구를 설치합니다. 그 후 터미널에서 아래 명령어를 입력하여 IAM 사용자의 액세스 키를 등록합니다.

```bash
aws configure
```

입력해야 할 정보는 다음과 같습니다:
*   **AWS Access Key ID:** IAM 사용자 보안 자격 증명에서 발급받은 액세스 키
*   **AWS Secret Access Key:** 발급 시 함께 제공된 비밀 액세스 키
*   **Default region name:** 리소스가 위치한 지역 (예: `ap-northeast-2`)
*   **Default output format:** 출력 형식 (보통 `json`이나 `table`)

### 2. 실행 중인 인스턴스 확인하기
현재 내 계정에서 돌아가고 있는 EC2 인스턴스의 상태를 확인하는 방법입니다.

*   **전체 정보를 JSON으로 보기:**
    ```bash
    aws ec2 describe-instances
    ```
*   **원하는 정보만 표(Table) 형태로 보기:**
    많은 인스턴스가 있을 때는 쿼리 문법을 사용해 핵심 정보(ID, 상태, 이름, IP 등)만 골라보는 것이 훨씬 직관적입니다.
    ```bash
    aws ec2 describe-instances --query 'Reservations[*].Instances[*].[InstanceId, State.Name, Tags[?Key==`Name`].Value | [0], PublicIpAddress]' --output table
    ```

### 3. 인스턴스 제어하기 (시작, 중지, 종료)
인스턴스 ID만 알면 터미널에서 즉시 상태를 변경할 수 있습니다.
*   **시작:** `aws ec2 start-instances --instance-ids [인스턴스ID]`
*   **중지:** `aws ec2 stop-instances --instance-ids [인스턴스ID]`
*   **종료(삭제):** `aws ec2 terminate-instances --instance-ids [인스턴스ID]`

---
CLI 환경에 익숙해지면 반복적인 인프라 관리 작업을 스크립트화하여 자동화할 수 있다는 강력한 장점이 있습니다. 콘솔 GUI에만 의존하기보다 CLI를 통해 인프라를 코드로 다루는 경험을 쌓아보시길 추천합니다.
