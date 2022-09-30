import './App.css';
import { useState } from 'react';
import SingleCard from './components/SingleCard';

//card images
const cardImages= [
  {"src": "/img/helmet-1.png" },
  {"src": "/img/potion-1.png" },
  {"src": "/img/ring-1.png" },
  {"src": "/img/scroll-1.png" },
  {"src": "/img/shield-1.png" },
  {"src": "/img/sword-1.png" },
]
function App() {
 const [cards, setCards] = useState([]);
 const [turns,setTurns]=useState(0);
 const [choiceOne,setChoiceOne]=useState(null);                          //user choices to select random card one 
 const [choiceTwo,setChoiceTwo]=useState(null);                          //user choices to select random card two & check its matching

  //shuffle cards
  const shuffleCards =() =>{
    const shuffledCards = [...cardImages , ...cardImages]
    .sort(()=>  Math.random() - 0.5)
    .map((card) => ({...card , id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)

  }

  //handle a choice
  const handleChoice = (card) =>{
    console.log(card)

  }

  // console.log(cards,turns)  
  return (
    <div className="App">
     <h1>Magic Match</h1>
     <button onClick={shuffleCards}>New Game</button>
     <div className="card-grid">
      {
        cards.map(card =>
         <SingleCard
           key={card.id} 
           card={card}
           handleChoice={handleChoice}
           />
        )
      }
     </div>
    </div>
  );
}


export default App;
