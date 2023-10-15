import React from 'react';
import divider from './__resources/images/pattern-divider-desktop.svg';
import dice from './__resources/images/icon-dice.svg';
import fetchData from './Data';
import './Card.css';

class Card extends React.Component {

    // 생성자
    constructor(props) {
        super(props);
        this.API_URL =  'https://api.adviceslip.com/advice';
        this.loadingMessage = "Listening to anonymous advice...";
        this.errorMessage = "Something went wrong! Please try again.";
        this.res = {};
    }

    /* states
       id:number // card 상단에 표시되는 id값
       comment: string // card 본문에 표시될 메시지
       isLoading: boolean // 로딩중인지 아닌지 상태를 표시
       isError: boolean // 에러가 발생했는지 아닌지 상태를 표시
    */
    state = {
        id:null,
        comment: this.loadingMessage,
        isLoading: false,
        isError: false,
    };

    // 컴포넌트가 마운트 되었을 때 실행하는 함수
    componentDidMount() {
        this.getFetchData(1);
    }

    // 새로운 데이터 받아오는 함수 + 카드 내 각 요소에 대한 이벤트 처리 포함
    async getFetchData(timeout) {

        this.setStates(null, this.loadingMessage, true, false);
        
        /* res에 담길 데이터 예시
           {slip: {id: number, advice: string}} */
        this.res = await fetchData(this.API_URL);

        if(this.state.isLoading === true && this.res.slip != null) {
            this.setState.isLoading = false;
            setTimeout( () => {
                this.setStates(this.res.slip.id, this.res.slip.advice, false, false);
            }, timeout*1000);
        } else {
            this.setStates(null, this.errorMessage, false, true);
        }
        
        return null
    }

    /* 상태를 변경하는 함수 (4개의 파라미터를 갖는다)
       id:number // card 상단에 표시되는 id값
       comment: string // card 본문에 표시될 메시지
       isLoading: boolean // 로딩중인지 아닌지 상태를 표시
       isError: boolean // 에러가 발생했는지 아닌지 상태를 표시
    */
    setStates(id, comment, isLoading, isError) {
        this.setState({
            id: id,
            comment: comment,
            isLoading: isLoading,
            isError:isError,
        })
    }
    
    // 클래스를 반환하는 함수
    returnClassName() {
        if(this.state.isLoading) return 'loading'
        else if(this.state.isError) return 'error'
        else return 'success'
    }

    // card의 타이틀을 반환하는 함수
    returnCardTitle() {
        if(this.state.isLoading) return 'Random 🎲 Advice'
        else if(this.state.isError) return 'service unavailable'
        else return 'Advice'
    }

    render() {
        return (
            <div>
                <div className="card">
                    <label>{ this.returnCardTitle() } 
                        <em>{ this.state.id ? `#${this.state.id}` : null }</em>
                    </label>
                    <p 
                        loading-status={ this.returnClassName()}
                        className="advice-paragraph">
                            { this.state.isLoading ? this.loadingMessage : this.state.comment }
                    </p>
                    <img 
                        loading-status={this.returnClassName()} 
                        className="divider"
                        alt='divider'
                        src={divider} />
                    <button 
                        loading-status= {this.returnClassName()}
                        className="dice-button"
                        onClick={  () => {
                            if(!this.state.isLoading) this.getFetchData(2.5)
                        } }>
                        <img alt="icon" src={dice} />
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;