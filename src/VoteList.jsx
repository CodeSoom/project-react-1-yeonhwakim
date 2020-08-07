import React from 'react';

import VoteItem from './VoteItem';

export default function VoteList({ restaurantItems, handleClick, voteId }) {
  if (!(restaurantItems || []).length) {
    return (
      <>
        <p>
          투표할 식당이 없어요! 식당을 추가해주세요~
        </p>
      </>
    );
  }

  return (
    <>
      <ul>
        {restaurantItems.map((restaurantItem) => (
          <VoteItem
            restaurantItem={restaurantItem}
            voteId={voteId}
            key={restaurantItem.id}
            onClick={handleClick}
          />
        ))}
      </ul>
    </>
  );
}
