# 엘리스 SW7기 스터디 2주차 요약
1차 스터디 6팀 - 프론트엔드 프로젝트 스터디 2주차에서는 frontend mentor 사이트의 [Advice generator app](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db) 프로젝트 구현을 진행했습니다.

## 스터디 진행 방식
 
- Github의 Organization에 각자 repository 생성
- Frontend Mentor 챌린지 페이지에서 제공하는 기본 리소스를 다운받아 소스 코드 작성
- 별도 Branch 생성 후 Pull Request 단위로 Merge
- 다른 팀원들의 작업한 PR을 리뷰하고 코멘트 남기기

## 사용 스택
HTML, CSS, JavaScript, and ...React

## 프로젝트 결과물

![코멘트 및 댓글 작성](https://github.com/elice-study-first/advice-generator-jihoonkim/raw/master/src/__resources/FE_challenge_advice_generator_app.gif)
- Github Repository : https://github.com/elice-study-first/advice-generator-jihoonkim
  
## 주요 구현 내용

### 구현 완료
-  [Advice Slip API](https://api.adviceslip.com/)와 통신하여 한 번에 1개의 조언 메시지와 id를 받아와서 사용자에게 제공하는 기능을 구현했습니다.
-  기본적으로 앱 최초 진입 시 사용자의 별도 조작이 없더라도 매번 1개의 조언 메시지를 볼 수 있도록 구현하였으며, 메시지 카드 하단의 주사위 버튼을 클릭하여 새로운 조언 메시지를 확인할 수 있습니다.

### 구현 예정
- [ ] fetch 응답이 비정상적일 경우 대응 케이스 정의
- [ ] isLoading 상태와 isError(에러 발생) 상태의 구분을 통한 메시지 표현 분기 처리


## 2주차 회고 

### 느낀 점
- 프로젝트에서 구현하려는 기능은 간단했으나, React 개념에 접목 시키는 방법을 즉시 이해하기가 조금 어려웠다.
- 특히 생성자(Constructor)나 상태(State) 같은 클래스(Class) 개념, OOP 개념에 대해 명확히 이해하지 못한 상태로 코드를 짜다보니 React를 제대로 활용하지 못한 느낌 (함수에서 특정 값을 직접 변경한다던지 하는.. 방식을 사용..)
- 커밋 메시지에 이모지와 대문자 구분어를 사용하니 조금 패턴이 정리되는 느낌
### 개선할 점
- (개인) React에 대해 배우면서도 프로그래밍 개념에 대한 이해도를 높이는 것도 병렬적으로 진행하자.
- (개인) README.md를 더 잘 쓰는 방법을 찾아보자.
- (개인) 상준님이 의견 주신 api 데이터를 받아오지 못했을 경우의 예외 처리에 대해서도 보완해보자
  
### 팀원 들의 코드를 통해 배운 점
- 커밋 메시지에 이모지와 구분어를 쓰고, PR 생성시 해결된 프로젝트의 이슈들을 연결하고 레이블을 할당하니 깃헙 사용이 좀 더 명확해진 느낌이었습니다.
- 로컬 스토리지 활용을 생각만 하고 있었는데 하연님 코드를 보고 많이 참고가 되었습니다.
- 지은님이 PR 내용에 겪었던 이슈와 해결 방법을 명시하신 것이 좋아 보여서 다음 프로젝트의 이슈 생성 시에 적용해 보려고 합니다.
- 다른 분들이 사용하신 useQuery, useEffect에 관해서도 다음 프로젝트에 공부해서 적용해보려고 합니다.