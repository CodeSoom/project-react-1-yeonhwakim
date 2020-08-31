import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import VotePage from './VotePage';

import HOME from '../../fixtures/home';
import ROOM from '../../fixtures/room';

describe('VotePage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      voteList: [],
    }));
  });

  context('with params props', () => {
    given('voteList', () => (ROOM[0].menu));

    it('renders voteList', () => {
      const params = { roomId: ROOM[0].id };

      const { container } = render(
        <MemoryRouter>
          <VotePage params={params} />
        </MemoryRouter>,
      );

      ROOM.filter((roomItem) => (
        roomItem.id === params.roomId
      ))[0].menu.map((menuItem) => (
        expect(container).toHaveTextContent(menuItem.name)
      ));
    });
  });

  context('without params props', () => {
    given('voteList', () => (ROOM[0].menu));

    it('renders name', () => {
      const homeId = HOME[0].room[0].id;
      const roomId = ROOM[0].id;
      const { container } = render(
        <MemoryRouter initialEntries={[`/home/${homeId}/room/${roomId}/menu`]}>
          <VotePage />
        </MemoryRouter>,
      );

      ROOM.filter((roomItem) => (
        roomItem.id === roomId
      ))[0].menu.map((menuItem) => (
        expect(container).toHaveTextContent(menuItem.name)
      ));
    });
  });
});
