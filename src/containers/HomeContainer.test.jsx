import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import HomeContainer from './HomeContainer';

import HOME from '../../fixtures/home';

jest.mock('react-redux');

describe('HomeContainer', () => {
  const dispatch = jest.fn();

  function renderHoomContainer(id) {
    return render((
      <HomeContainer
        homeId={id}
      />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      roomList: given.roomList,
    }));
  });

  context('with roomList', () => {
    given('roomList', () => (HOME[0].room));

    it('renders roomList', () => {
      const homeId = 1;
      const { container } = renderHoomContainer(homeId);

      expect(dispatch).toBeCalledTimes(1);

      HOME.filter((homeItem) => (
        homeItem.id === homeId
      ))[0].room.map((room) => (
        expect(container).toHaveTextContent(room.name)
      ));
    });
  });

  context('without roomList', () => {
    given('roomList', () => ([]));

    it('renders no items message', () => {
      const homeId = 1;
      const { container } = renderHoomContainer(homeId);

      expect(container).toHaveTextContent('투표방을 추가해주세요~');
    });
  });
});
