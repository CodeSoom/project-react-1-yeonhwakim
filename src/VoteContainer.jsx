import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurants,
  setVoteCount,
} from './redux/slice';

import { get } from './utils/utils';

import VoteList from './VoteList';

export default function VoteContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  const restaurantItems = useSelector(get('restaurants'));

  function handleClick(id) {
    dispatch(setVoteCount(id));
  }
  return (
    <>
      <VoteList restaurantItems={restaurantItems} handleClick={handleClick} />
    </>
  );
}
