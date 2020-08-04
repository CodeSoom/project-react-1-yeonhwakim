import React from 'react';

import VoteList from './VoteList';

export default function VotePage() {
  const restaurantItems = [
    { id: 'no1', name: '국수나무', count: 0 },
    { id: 'no2', name: '요기맘', count: 0 },
    { id: 'no3', name: '구내식당', count: 0 },
    { id: 'no4', name: '돈푸대', count: 0 },
    { id: 'no5', name: '태양식당', count: 0 },
  ];
  return (
    <>
      <h1>Vote for lunch!!!</h1>
      <VoteList restaurantItems={restaurantItems} />
    </>
  );
}
