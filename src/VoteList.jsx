import React from 'react';

import VoteItem from './VoteItem';

export default function VoteList({ voteList, handleClick, voteId }) {
  if (!(voteList || []).length) {
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
        {voteList.map((voteItem) => (
          <VoteItem
            voteItem={voteItem}
            voteId={voteId}
            key={voteItem.id}
            onClick={handleClick}
          />
        ))}
      </ul>
    </>
  );
}
