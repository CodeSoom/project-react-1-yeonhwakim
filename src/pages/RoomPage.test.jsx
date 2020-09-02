import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RoomPage from './RoomPage';

jest.mock('react-redux');

describe('RoomPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      voteList: [],
    }));
  });

  function renderRoomPage({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <RoomPage />
      </MemoryRouter>
    ));
  }

  context('with path /home/1/room/1/vote', () => {
    it('renders the vote page', () => {
      const { container } = renderRoomPage({ path: '/home/1/room/1/vote' });

      expect(container).toHaveTextContent('Vote for lunch!!!');
    });
  });

  context('with path /home/1/room/1/menu', () => {
    it('renders the menu page', () => {
      const { container } = renderRoomPage({ path: '/home/1/room/1/menu' });

      expect(container).toHaveTextContent('Menu!!!!');
    });
  });
});
