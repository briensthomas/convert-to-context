import React from 'react';
import CardList from './CardList';
import { useGameContext } from './GameProvider';

export default function Player({ player, hand }) {
  const {  
    setFrom, 
    to, setTo, 
    selectedCard, setSelectedCard, 
  } = useGameContext();
  
  return (
    <div className={`player ${to === player ? 'selected-player' : ''}`} onClick={() => setTo(player)}>
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard} />
      
    </div>
  );
}
