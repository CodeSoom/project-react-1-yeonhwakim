import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurants,
  setSingleVote,
} from './redux/slice';

import { get } from './utils/utils';

import VoteList from './VoteList';

export default function VoteContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  const restaurantItems = useSelector(get('restaurants'));
  const voteId = useSelector(get('voteId'));

  function handleClick(id) {
    dispatch(setSingleVote(id, voteId));
  }

  return (
    <>
      <VoteList
        restaurantItems={restaurantItems}
        voteId={voteId}
        handleClick={handleClick}
      />
    </>
  );
}
