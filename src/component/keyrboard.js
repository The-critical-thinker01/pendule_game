import React ,{ Component } from 'react';

class Keyboard extends Component{ 

//  ( {alphabet,action}) =>{  recherche sur les props
// console.log( alphabet )

componentDidMount(){
    window.addEventListener("keyup", (e) =>{
        if(this.props.alphabet.indexOf(e.key) != -1){
            this.props.action(e.key)
        }
        console.log(e)
    } 
    
    
    )
}

render(){ 

    return (
        <div id='keyboard'>
            {
                this.props.alphabet.map(
                    (letter , key)=>{
                        console.log(key + "=>" + letter)
                        return <button 
                        key={"keyboard_"+key}
                        onClick ={()=> this.props.action(letter)} 
                        className={ this.props.usedLetter.indexOf(letter) !== -1 ? "used" : "   "  }
                        >
                        {letter}</button>
                    }
                )
            }
        </div>
    )

}
}

export default Keyboard