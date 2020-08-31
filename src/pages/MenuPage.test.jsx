import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import MenuPage from './MenuPage';

import HOME from '../../fixtures/home';
import ROOM from '../../fixtures/room';

describe('MenuPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      menuList: given.menuList,
    }));
  });

  context('with params props', () => {
    given('menuList', () => (ROOM[0].menu));

    it('renders menuList', () => {
      const params = { roomId: ROOM[0].id };

      const { container } = render(
        <MemoryRouter>
          <MenuPage params={params} />
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
    given('menuList', () => (ROOM[0].menu));

    it('renders name', () => {
      const homeId = HOME[0].room[0].id;
      const roomId = ROOM[0].id;
      const { container } = render(
        <MemoryRouter initialEntries={[`/home/${homeId}/room/${roomId}/menu`]}>
          <MenuPage />
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
