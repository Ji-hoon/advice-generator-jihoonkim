import React from 'react';
import divider from './__resources/images/pattern-divider-desktop.svg';
import dice from './__resources/images/icon-dice.svg';
import './Card.css';

class Card extends React.Component {
    // 생성자
    constructor(props) {
        super(props);
        this.API_URL =  'https://api.adviceslip.com/advice';
        this.idLoadingMessage = "Listening to anonymous advice...";
        this.res = {};
    }

    state = {
        id:null,
        comment: this.idLoadingMessage,
        isLoading: true,
        isError: false,
    };

    // 컴포넌트가 마운트 되었을 때 실행하는 함수
    componentDidMount() {
        fetch('https://api.adviceslip.com/advic')
            .then( response => {
                if (!response.ok) {
                    throw new Error('HTTP Error ' + response.status);
                }
                return response.json();
            })
            .then( data => {
                
                if(data) {
                    this.res = data.slip;
                    setTimeout( () => {
                        return this.generateAdvice(this.res);
                    }, 1500)
                }
            })
            .catch( error => {
                console.log('Error: ', error);

                this.setState({
                    id:null,
                    comment: "___Something went wrong!___ Please try again",
                    isLoading: false,
                    isError: false,
                });
            })   
    }

    // 새로운 데이터 받아오는 함수 + 카드 내 각 요소에 대한 이벤트 처리 포함
    getFetchData(timtout) {

        this.setState({
            id:null,
            comment: this.idLoadingMessage,
            isLoading: true,
            isError:false,
        });
        
        fetch(this.API_URL)
          .then( response => response.json())
          .then( data => {
            this.res = data.slip;
            setTimeout( () => {
              return this.generateAdvice(this.res)
            }, timtout*1000)
          })
    }

    // 받아온 데이터로 카드 내 콘텐츠를 그리는 함수
    generateAdvice(res) {
        this.setState({
            id:res.id,
            comment:res.advice,
            isLoading: false,
            isError: false,
        });
    }

    render() {
       
        return (
            <div>
                <div className="card">
                    <label>{this.state.isLoading ? 'Random 🎲 Advice': 'Advice'} 
                        <em>{ this.state.id ? `#${this.state.id}` : null }</em>
                    </label>
                    <p 
                        loading-status={this.state.isLoading ? 'loading' : ''}
                        className="advice-paragraph">
                            { this.state.isLoading ? this.idLoadingMessage : this.state.comment }
                    </p>
                    <img 
                        loading-status={this.state.isLoading ? 'loading' : ''} 
                        className="divider"
                        alt='divider'
                        src={divider} />
                    <button 
                        loading-status= {this.state.isLoading ? 'loading' : ''}
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