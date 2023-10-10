import React from 'react';
import divider from './__resources/images/pattern-divider-desktop.svg';
import dice from './__resources/images/icon-dice.svg';
import './App.css';

class Card extends React.Component {
    // 생성자
    constructor(props) {
        super(props);
        this.API_URL =  'https://api.adviceslip.com/advice';
        this.ATTR_URL = 'https://www.frontendmentor.io?ref=challenge';
        this.GIT_REPO_URL = 'https://github.com/elice-study-first/advice-generator-jihoonkim';
        this.res = {};
    }
    
    getFetchData() {
        this.diceButton = document.querySelector('button.dice-button');
        this.idElement = document.querySelector('label em');
        this.paragraphElement = document.querySelector('.advice-paragraph');

        this.diceButton.classList.add('processing');
        this.idElement.removeAttribute('id');
        this.idElement.textContent = '';
        this.paragraphElement.classList.add('processing');
        this.paragraphElement.textContent = '';
        this.paragraphElement.innerHTML = `<span>Listening to<br>anonymous advice...</span>`;
        
        fetch(this.API_URL)
          .then( response => response.json())
          .then( data => {
            this.res = data.slip;
            setTimeout( () => {
              return this.generateAdvice(this.res)
            }, 2500)
          })
    }
      
    generateAdvice(res) {
        this.diceButton.classList.remove('processing');
        this.paragraphElement.classList.remove('processing');
      
        this.idElement.setAttribute('id', res.id);
        this.idElement.textContent = res.id;
        this.paragraphElement.innerHTML = res.advice;
    }

    render() {
        return (
            <div className="App">
                <div className="card">
                    <label>Advice <em id="117">117</em></label>
                    <p className="advice-paragraph">it is easy to sit up and take notice, what's difficult is getting up and taking action.</p>
                    <img src={divider} />
                    <button 
                        className="dice-button" 
                        onClick={() => this.getFetchData() }>
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