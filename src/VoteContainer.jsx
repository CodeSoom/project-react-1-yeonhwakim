import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurants,
} from './redux/slice';

import { get } from './utils/utils';

import VoteList from './VoteList';

export default function VoteContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  const restaurantItems = useSelector(get('restaurants'));

  return (
    <>
      <VoteList restaurantItems={restaurantItems} />
    </>
  );
}
