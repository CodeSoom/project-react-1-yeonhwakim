import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import VotePage from './VotePage';

import {
  loadUser,
} from './redux/slice';

import { loadItem, saveItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();
  const accessToken = loadItem('accessToken');

  if (!accessToken) {
    saveItem(accessToken, 'user1');
  }

  useEffect(() => {
    dispatch(loadUser(loadItem('accessToken')));
  }, []);

  return (
    <VotePage />
  );
}
