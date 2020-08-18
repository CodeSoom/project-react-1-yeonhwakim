import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import TabPage from './TabPage';
import VotePage from './VotePage';
import MenuPage from './MenuPage';

export default function RoomPage() {
  return (
    <>
      <TabPage />
      <Switch>
        <Route path="/home/:id/room/:name/vote" component={VotePage} />
        <Route path="/home/:id/room/:name/menu" component={MenuPage} />
      </Switch>
    </>
  );
}
