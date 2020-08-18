import React from 'react';

export default function VoteItem({ menuItem: { id, name }, onClick, onBlur }) {
  function handleBlur(event) {
    const { target: { textContent } } = event;
    onBlur({
      updateId: id,
      updateName: textContent,
    });
  }

  return (
    <>
      <li>
        <span
          contentEditable
          suppressContentEditableWarning
          onBlur={handleBlur}
        >
          {name}

        </span>
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
