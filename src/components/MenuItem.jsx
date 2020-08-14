import React from 'react';

export default function VoteItem({ menuItem: { name } }) {
  return (
    <>
      <li>
        {name}
        <button type="button">삭제</button>
      </li>
    </>
  );
}
