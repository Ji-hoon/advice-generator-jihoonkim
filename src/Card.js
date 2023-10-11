import React from 'react';
import divider from './__resources/images/pattern-divider-desktop.svg';
import dice from './__resources/images/icon-dice.svg';
import './Card.css';

class Card extends React.Component {
    
    // 생성자
    constructor(props) {
        super(props);
        this.API_URL =  'https://api.adviceslip.com/advice';
        this.ATTR_URL = 'https://www.frontendmentor.io?ref=challenge';
        this.GIT_REPO_URL = 'https://github.com/elice-study-first/advice-generator-jihoonkim';
        this.res = fetch(this.API_URL)
                .then( response => response.json())
                .then( data => {
                this.res = data.slip;
                setTimeout( () => {
                    return this.generateAdvice(data.slip)
                  }, 1000)
            });
        this.state = {
            id:Number,
            comment:"Listening to anonymous advice...",
            isLoading: true,
        };
    }
    
    // 새로운 데이터 받아오는 함수 + 카드 내 각 요소에 대한 이벤트 처리 포함
    getFetchData(timtout) {

        this.setState({
            id:null,
            comment:"Listening to anonymous advice...",
            isLoading: true,
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
        });
    }

    render() {
       
        return (
            <div>
                <div className="card">
                    <label>{this.state.isLoading ? 'Random Advice': 'Advice'} 
                        <em id={this.state.id}>{this.state.id}</em>
                    </label>
                    <p 
                        loading-status={this.state.isLoading ? 'loading' : ''}
                        className="advice-paragraph">
                            {this.state.comment}
                    </p>
                    <img 
                        loading-status={this.state.isLoading ? 'loading' : ''} 
                        className="divider"
                        alt='divider'
                        src={divider} />
                    <button 
                        loading-status= {this.state.isLoading ? 'loading' : ''}
                        className="dice-button"
                        onClick={() => this.getFetchData(2.5) }>
                            <img src={dice} />
                    </button>
                </div>
                <div className="attribution">
                    Challenge by <a href={this.ATTR_URL} target="_blank">Frontend Mentor</a>. 
                    Coded by <a href={this.GIT_REPO_URL} target="_blank">Jihoon Kim</a>.
                </div>
            </div>
        );
    }
}

export default Card;