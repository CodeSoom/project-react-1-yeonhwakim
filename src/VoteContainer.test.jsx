import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import VoteContainer from './VoteContainer';

jest.mock('react-redux');

describe('VoteContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurants: given.restaurants,
    }));
  });

  context('with restaurant', () => {
    given('restaurants', () => ([
      { id: 'no1', name: '국수나무', count: 0 },
      { id: 'no2', name: '요기맘', count: 0 },
      { id: 'no3', name: '구내식당', count: 0 },
      { id: 'no4', name: '돈푸대', count: 0 },
      { id: 'no5', name: '태양식당', count: 0 },
    ]));

    function rednerVoteContainer() {
      return render(<VoteContainer />);
    }
    it('renders restaurants', () => {
      const { container } = rednerVoteContainer();

      expect(container).toHaveTextContent('국수나무0');
      expect(container).toHaveTextContent('요기맘0');
      expect(container).toHaveTextContent('구내식당0');
      expect(container).toHaveTextContent('돈푸대0');
      expect(container).toHaveTextContent('태양식당0');
    });

    it('listens click event', () => {
      const { getByText } = rednerVoteContainer();
      fireEvent.click(getByText('국수나무0'));

      expect(dispatch).toBeCalledWith({
        type: 'application/setVoteCount',
        payload: 'no1',
      });
    });
  });
  context('without restaurant', () => {
    given('restaurants', () => ([]));
    it('renders loading message', () => {
      const { container } = render((
        <VoteContainer />
      ));
      expect(container).toHaveTextContent('투표할 식당이 없어요! 식당을 추가해주세요~');
    });
  });
});
