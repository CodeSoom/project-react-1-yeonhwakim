import React from 'react';

export default function RoomItem({ roomItem: { name } }) {
  return (
    <>
      <button type="button">
        {name}
      </button>
    </>
  );
}
