import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import HomeContainer from './HomeContainer';

import HOME from '../../fixtures/home';

jest.mock('react-redux');

describe('HomeContainer', () => {
  const dispatch = jest.fn();

  function renderHoomContainer() {
    return render((
      <HomeContainer />
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
      const { container } = renderHoomContainer();

      expect(dispatch).toBeCalledTimes(1);

      HOME[0].room.forEach(({ name }) => (
        expect(container).toHaveTextContent(`${name}`)
      ));
    });
  });

  context('without roomList', () => {
    given('roomList', () => ([]));

    it('renders no items message', () => {
      const { container } = renderHoomContainer();

      expect(container).toHaveTextContent('투표방을 추가해주세요~');
    });
  });
});
