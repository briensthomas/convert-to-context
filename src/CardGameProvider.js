import { useState, createContext, useContext } from 'react';
import initialCards from './cards-data.js';

const GameContext = createContext();

export default function CardGameProvider({ children }) {

  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  

  const stateAndSetters = {
    deck, setDeck,
    playerOneHand, setPlayerOneHand,
    selectedCard, setSelectedCard,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from, setFrom,
    to, setTo,
  };

  return <GameContext.Provider value={stateAndSetters}>
    {children}
  </GameContext.Provider>;
}

export function useGameContext() {
  return useContext(GameContext);
}