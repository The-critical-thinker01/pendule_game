import React from 'react';
import './App.css';

const Heart  = ( {attempt,maxAttempt}) =>{

return(
     <div id="life" className='heart' >
         { 
            attemptToHeart(attempt,maxAttempt).map(
                (value, index) =>{
                     let val="oui"

                     if(value===0){
                         val="empty"
                     }else{
                         val="heart"
                     }
                    return <span className={val} >
                    </span>

{/*
      if(win ===-1){
                                         status = "lost"
                                     }else{
                                        status ="notfinded"
                                     }
    <span key={"letter_" + key} className={status}>
{ status === "finded" ? letter :
(win === -1 ? letter : "?") 
} 

</span>  */}





                }
            )

         }
     </div>
  )
}

function attemptToHeart(attempt,maxAttempt){
 let hearts=[]
 for(let i=1; i<maxAttempt;i++){

            if( i<attempt){
                hearts.push(0)
            }else{
                hearts.push(1)
            }

 }
 return hearts;
}


export default Heart