import React ,{ Component } from 'react';
import Compteur from './component/compteur';
import Keyboard from './component/keyrboard';
import CurrentLetter from './component/Letter';
import './App.css';
import Heart from './heart';

class  App extends Component {
  state = {
    tabMot:["manger","pleurer","dancer","coder","programmation","toto"],
    motCourent:null,
    alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(''),
    usedLetter: [],
    win: 0 , // 0 : neutre |-1: perdu |1 : gagné
    attempt:0,
    maxAttempt:9
  }

  componentDidMount(){
    window.addEventListener("keyup", (e) =>{
        if(e.keyCode === 13){
          this.initGame()
        }
    }
    ) 
    //  this.initGame()
  }

  clickLetter = (letter)=>{
     console.log("=>"+letter)
    // nombre de tentative
    if (this.state.usedLetter.indexOf(letter) === -1){

      let attempt=this.state.attempt;
        const usedLetter =[letter, ...this.state.usedLetter]
       
        if(this.state.motCourent.indexOf(letter) === -1){
            attempt =this.state.attempt +1
          // this.setState({attempt})
        }

        let win = 1
        for(let i=0; i < this.state.motCourent.length; i++){
            if(usedLetter.indexOf(this.state.motCourent[i]) === -1){
              win=0
            }
        }

        if(attempt >= this.state.maxAttempt && win === 0){
          win=-1
        }


        this.setState({ usedLetter, attempt,win });

    }
    // }else{
    //   console.log("la lettre est deja traitée")
    // }

  }

pickNewWord = ()=>{
const randomIndex =Math.floor(Math.random()*this.state.tabMot.length)
return this.state.tabMot[randomIndex]

}


  initGame= () => {
    this.setState({
      motCourent:this.pickNewWord(),
      usedLetter:[],
      win:0,
      attempt:0
    })
  }
 
  render(){ 

  return (
    <div id='game'>
          <div>  <Compteur /> </div>

          <div id='jeux'>   
                  <h1>pendule</h1>

                  Critical=   {this.state.win}
                  <br/>
                 Thinker= {this.state.attempt}
                  {/* <div>{this.state.motCourent}</div> */}
                  {
                        (this.state.motCourent !==  null) &&
                        <CurrentLetter 
                            mots={this.state.motCourent}
                            usedLetter={this.state.usedLetter}
                            win={this.state.win}
                        />
                  }


                  {
                      (this.state.motCourent !== null) &&
                      <Heart 
                      attempt={this.state.attempt}
                      maxAttempt={ this.state.maxAttempt }
                      />

                  }


                    {
                      (this.state.win===1)&&
                      <p class="win_msg">You  Won !!!</p>
                    }
                    {
                      (this.state.win===-1)&&
                      <p class="lost_msg">you lose !</p>
                    }




                { (this.state.win === 0 && this.state.motCourent !==null) &&
                  <Keyboard
                   alphabet={this.state.alphabet}
                   action={this.clickLetter} 
                   usedLetter={this.state.usedLetter}
                  /> 
                }
        </div>
        { 
        (this.state.motCourent ===null || this.state.win===1 || this.state.win=== -1) &&
        <button id='play_new_game' onClick={ () => this.initGame() }>Nouvelle partie</button>
        }   
        </div>
  );

}


}
export default App;
 


