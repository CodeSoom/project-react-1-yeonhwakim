import React from 'react';

import { Link } from 'react-router-dom';

export default function RoomItem({ homeId, roomItem: { id: roomId, name } }) {
  return (
    <>
      <Link to={`/home/${homeId}/room/${roomId}`}>{name}</Link>
    </>
  );
}
