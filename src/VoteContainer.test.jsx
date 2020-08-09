import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import VoteContainer from './VoteContainer';

import VOTELIST from '../fixtures/voteList';

jest.mock('react-redux');

describe('VoteContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      voteList: given.voteList,
      voteId: given.voteId,
    }));
  });

  context('with voteList', () => {
    given('voteList', () => (VOTELIST));

    given('voteId', () => '');

    function rednerVoteContainer() {
      return render(<VoteContainer />);
    }

    it('renders voteList', () => {
      const { container } = rednerVoteContainer();

      VOTELIST.forEach(({ name, count }) => (
        expect(container).toHaveTextContent(`${name}${count}`)
      ));
    });

    it('listens click event', () => {
      const { getByText } = rednerVoteContainer();

      fireEvent.click(getByText('국수나무0'));

      expect(dispatch).toBeCalledTimes(3);
    });
  });

  context('without voteList', () => {
    given('voteList', () => ([]));
    it('renders loading message', () => {
      const { container } = render((
        <VoteContainer />
      ));
      expect(container).toHaveTextContent('투표할 식당이 없어요! 식당을 추가해주세요~');
    });
  });
});
