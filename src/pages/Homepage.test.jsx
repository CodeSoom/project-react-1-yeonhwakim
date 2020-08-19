import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

import HOME from '../../fixtures/home';

describe('HomePage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      roomList: given.roomList,
    }));
  });

  context('with params props', () => {
    given('roomList', () => (HOME[0].room));

    it('renders rooms', () => {
      const params = { id: 1 };

      const { container } = render(
        <HomePage params={params} />,
      );

      HOME.filter((homeItem) => (
        homeItem.id === params.id
      ))[0].room.map((room) => (
        expect(container).toHaveTextContent(room.name)
      ));
    });
  });

  context('without params props', () => {
    given('roomList', () => (HOME[0].room));

    it('renders name', () => {
      const id = 1;
      const { container } = render(
        <MemoryRouter initialEntries={[`/home/${id}`]}>
          <HomePage />
        </MemoryRouter>,
      );

      HOME.filter((homeItem) => (
        homeItem.id === id
      ))[0].room.map((room) => (
        expect(container).toHaveTextContent(room.name)
      ));
    });
  });
});
