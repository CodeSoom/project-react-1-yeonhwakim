import React from 'react';

export default function VoteItem({ restaurantItem: { name, count } }) {
  return (
    <>
      <li>
        <span>
          {name}
        </span>
        ||
        <button type="button">
          {count}
        </button>
      </li>
    </>
  );
}
