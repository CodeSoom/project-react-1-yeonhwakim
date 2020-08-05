import React from 'react';

export default function VoteItem({ restaurantItem: { name, count, id }, onClick }) {
  return (
    <>
      <li>
        <button type="button" onClick={() => onClick(id)}>
          {name}
          {count}
        </button>
      </li>
    </>
  );
}
