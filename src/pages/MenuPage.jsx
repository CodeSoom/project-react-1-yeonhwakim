import React from 'react';

import { useParams } from 'react-router-dom';

import MenuContainer from '../containers/MenuContainer';

export default function MenuPage({ params }) {
  const { roomId } = params || useParams();

  return (
    <>
      <h1>Menu!!!!</h1>
      <MenuContainer
        roomId={roomId}
      />
    </>
  );
}
