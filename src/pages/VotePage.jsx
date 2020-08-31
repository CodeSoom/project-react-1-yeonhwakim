import React from 'react';

import { useParams } from 'react-router-dom';

import VoteContainer from '../containers/VoteContainer';

export default function VotePage({ params }) {
  const { roomId } = params || useParams();

  return (
    <>
      <h1>Vote for lunch!!!</h1>
      <VoteContainer
        roomId={roomId}
      />
    </>
  );
}
