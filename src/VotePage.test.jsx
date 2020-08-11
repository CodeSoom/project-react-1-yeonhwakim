import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import VotePage from './VotePage';

describe('VotePage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      voteList: [],
    }));
  });

  it('redners vote header', () => {
    const { container } = render((
      <VotePage />
    ));
    expect(container).toHaveTextContent('Vote for lunch!!!');
  });

  it('loads vote list', () => {
    render((
      <VotePage />
    ));
    expect(dispatch).toBeCalled();
  });
});
