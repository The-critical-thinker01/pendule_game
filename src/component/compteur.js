import React,{useState} from 'react';

const Compteur=()=>{
    const [nbr , setNbr]= useState(0);

const increment=()=>{
  setNbr(nbr+1);
}

function decrement(){
    
    if(nbr>0)
    setNbr(nbr-1);
}

return(
    <div>
            <h1 className='scoore'> vous avez  <span  id='montant'>{nbr}  </span>   frs </h1>
            <button id="augmenter" onClick={increment}>Augmenter</button>
            <button id="reduire" onClick={decrement}>Reduire</button>
    </div>
)

}
export default Compteur;
