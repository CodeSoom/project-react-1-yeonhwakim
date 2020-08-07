import React from 'react';

export default function VoteItem({ restaurantItem: { name, count, id }, onClick, voteId }) {
  return (
    <>
      <li>
        <button type="button" onClick={() => onClick(id)}>
          {id === voteId ? '(V)' : null}
          {' '}
          {name}
          {count}
        </button>
      </li>
    </>
  );
}
