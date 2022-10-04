import React from 'react';
import './SingleCard.css';

const SingleCard = ({card,handleChoice,flipped,disabled}) => {
   
    const handleClick=()=>{
        if(!disabled){
         handleChoice(card)
        }
      }
      
    const filpStyle=flipped ? "flipped" : "";

    return (
        <>
         <div className='card'>
            <div className={filpStyle}>
              <img src={card.src} className="front" alt='card front'/>
              <img 
               className='back' 
              onClick={handleClick}
              src="/img/cover.png"
               alt="card back"
             />
            </div>
          </div>
       </>
    );
};

export default SingleCard;