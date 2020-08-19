import React from 'react';

import { render } from '@testing-library/react';

import RoomList from './RoomList';

import Home from '../../fixtures/home';

describe('RoomList', () => {
  function renderRoomList(roomList) {
    return render((
      <RoomList
        roomList={roomList}
      />
    ));
  }

  context('with room list', () => {
    it('renders room list', () => {
      const roomList = Home[0].room;

      const { container } = renderRoomList(roomList);

      Home[0].room.forEach(({ name }) => (
        expect(container).toHaveTextContent(name)
      ));
    });
  });

  context('without room list', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((roomList) => {
        const { container } = renderRoomList(roomList);

        expect(container).toHaveTextContent('투표방을 추가해주세요~');
      });
    });
  });
});
