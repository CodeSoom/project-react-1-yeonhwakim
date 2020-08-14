import React, { useEffect } from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import TabPage from './pages/TabPage';
import VotePage from './pages/VotePage';
import MenuPage from './pages/MenuPage';

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
      <TabPage />
      <Switch>
        <Route exact path="/" component={VotePage} />
        <Route path="/vote" component={VotePage} />
        <Route path="/menu" component={MenuPage} />
      </Switch>
    </>
  );
}
