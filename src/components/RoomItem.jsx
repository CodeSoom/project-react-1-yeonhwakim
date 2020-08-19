import React from 'react';

export default function RoomItem({ roomItem: { id, name }, onClick }) {
  return (
    <>
      <button
        type="button"
        onClick={() => onClick(id)}
      >
        {name}
      </button>
    </>
  );
}
