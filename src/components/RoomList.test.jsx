import React from 'react';

import { render } from '@testing-library/react';

import RoomList from './RoomList';

import Home from '../../fixtures/home';

describe('RoomList', () => {
  context('with room list', () => {
    it('renders room list', () => {
      const roomList = Home[0].room;

      const { container } = render((<RoomList roomList={roomList} />));

      Home[0].room.forEach(({ name }) => (
        expect(container).toHaveTextContent(name)
      ));
    });
  });

  context('without room list', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((roomList) => {
        const { container } = render((<RoomList roomList={roomList} />));

        expect(container).toHaveTextContent('투표방을 추가해주세요~');
      });
    });
  });
});
