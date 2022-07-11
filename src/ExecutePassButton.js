import React from 'react';
import Card from './Card';

export default function ExecutePassButton({ passCard, from, to, selectedCard }) {
  return (
    <div className='execute-button' onClick={() => passCard(selectedCard)}>
        Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
