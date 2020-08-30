import React from 'react';

import { render } from '@testing-library/react';

import RoomList from './RoomList';

import Home from '../../fixtures/home';

describe('RoomList', () => {
  function renderRoomList({ homeId, roomList }) {
    return render((
      <RoomList
        homeId={homeId}
        roomList={roomList}
      />
    ));
  }

  context('with room list', () => {
    it('renders room list', () => {
      const homeId = Home[0].id;
      const roomList = Home[0].room;

      const { container } = renderRoomList({ homeId, roomList });

      Home[0].room.forEach(({ name }) => (
        expect(container).toHaveTextContent(name)
      ));
    });
  });

  context('without room list', () => {
    it('renders no items message', () => {
      const homeId = Home[0].id;
      [[], null, undefined].forEach((roomList) => {
        const { container } = renderRoomList({ homeId, roomList });

        expect(container).toHaveTextContent('투표방을 추가해주세요~');
      });
    });
  });
});
