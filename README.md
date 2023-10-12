# Advice generator app

![최종 결과물 미리보기 :](./src/__resources/FE_challenge_advice_generator_app.gif)

## 안녕하세요! 👋

본 리포지토리는 [Frontend Mentor](https://www.frontendmentor.io) 사이트의 Advice Generator 챌린지를 수행한 내용을 담고 있습니다.

**사용 기술 : HTML, CSS, JavaScript 그리고 (아주 조금의) React**

## 구현 내용

본 앱에서는 [Advice Slip API](https://api.adviceslip.com)와 통신하여 한 번에 1개의 **조언 메시지**와 **id**를 받아와서 사용자에게 제공하는 기능을 구현했습니다.

기본적으로 앱 최초 진입 시 사용자의 별도 조작이 없더라도 매번 1개의 조언 메시지를 볼 수 있도록 구현하였으며, 메시지 카드 하단의 주사위 버튼을 클릭하여 새로운 조언 메시지를 확인할 수 있습니다.

## 상태 처리
React의 state 객체 내부에 **isLoading** 상태를 정의하여 데이터를 불러오는 중 일때와 아닐 때를 나누어서 상태에 따른 버튼 인터랙션과 메시지를 다르게 가져올 수 있도록 처리했습니다.

``` javascript
state = {
        id: null,
        comment: isLoadingMessage,
        isLoading: true,
    };
```
또한 Button 엘리먼트가 이벤트를 실행하는 조건을 제한하여 중복해서 이벤트가 발생하지 않도록 처리했습니다.
``` javascript
<button 
    loading-status= {this.state.isLoading ? 'loading' : ''}
    className="dice-button"
    onClick={ () => {
        if(!this.state.isLoading) this.getFetchData(2.5)
    } }>
</button>
```

## 마치며

처음 시작하는 React 프로젝트여서 간단한 스펙의 프로젝트를 선정했는데 새로운 컨셉이나 개념들을 적용하며 많이 배울 수 있었습니다.

**Have fun building!** 🚀
