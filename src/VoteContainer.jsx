import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurants,
  sendVoteId,
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
    dispatch(sendVoteId(id));
    dispatch(loadRestaurants());
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
