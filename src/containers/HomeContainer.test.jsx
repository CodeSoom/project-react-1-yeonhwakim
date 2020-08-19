import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import HomeContainer from './HomeContainer';

import HOME from '../../fixtures/home';

const mockHistoryPush = jest.fn();

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

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

    it('listens click event', () => {
      const homeId = 1;
      const { getByText } = renderHoomContainer(homeId);
      const { id, name } = HOME[0].room[0];

      fireEvent.click(getByText(name));

      expect(mockHistoryPush).toHaveBeenCalledWith(`/home/${homeId}/room/${id}/vote`);
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
