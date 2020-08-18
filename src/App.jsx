import React, { useEffect } from 'react';

import {
  Switch,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './pages/HomePage';
import RoomPage from './pages/RoomPage';

import {
  loadUser,
} from './redux/slice';

import { loadItem, saveItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();
  const accessToken = loadItem('accessToken');

  if (!accessToken) {
    saveItem('accessToken', 'user1');
  }

  useEffect(() => {
    dispatch(loadUser(loadItem('accessToken')));
  }, []);

  return (
    <>
      <Switch>
        <HomePage exact path="/home/:id" component={HomePage} />
        <RoomPage path="/home/:id/room/:name" component={RoomPage} />
      </Switch>
    </>
  );
}
