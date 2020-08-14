import React from 'react';

export default function VoteItem({ menuItem: { id, name }, onClick }) {
  return (
    <>
      <li>
        {name}
        <button
          type="button"
          onClick={() => onClick(id)}
        >
          삭제
        </button>
      </li>
    </>
  );
}
