import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import VotePage from './VotePage';

import {
  loadUser,
} from './redux/slice';

import { loadItem, saveItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = loadItem('accessToken');
    // TODO: Delete in production
    if (!accessToken) {
      saveItem(accessToken, 'user1');
    }

    dispatch(loadUser(accessToken));
  }, []);

  return (
    <VotePage />
  );
}
