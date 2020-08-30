import React from 'react';

import { useParams } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';

export default function HomePage({ params }) {
  const { homeId } = params || useParams();

  return (
    <>
      <h1>Home!!!!</h1>
      <HomeContainer
        homeId={homeId}
      />
    </>
  );
}
