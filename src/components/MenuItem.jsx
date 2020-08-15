import React from 'react';

export default function VoteItem({ menuItem: { id, name }, onClick }) {
  return (
    <>
      <li>
        <span contentEditable>{name}</span>
        <button
          type="button"
          data-testid={id}
          onClick={() => onClick(id)}
        >
          삭제
        </button>
      </li>
    </>
  );
}
