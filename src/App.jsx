import React, { useEffect } from 'react';

import {
  Switch,
  Route,
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
        <Route exact path="/home/:homeId" component={HomePage} />
        <Route path="/home/:homeId/room/:roomId" component={RoomPage} />
      </Switch>
    </>
  );
}
