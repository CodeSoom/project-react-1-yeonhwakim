import React from 'react';

export default function VoteItem({ menuItem: { name } }) {
  return (
    <>
      <li>
        {name}
      </li>
    </>
  );
}
