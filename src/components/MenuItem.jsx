import React from 'react';

export default function VoteItem({ menuItem: { id, name }, onClick, onBlur }) {
  function handleBlur(event, updateId) {
    const { target: { textContent } } = event;
    onBlur({
      updateId,
      updateName: textContent,
    });
  }

  return (
    <>
      <li>
        <span
          contentEditable
          suppressContentEditableWarning
          onBlur={(event) => handleBlur(event, id)}
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
