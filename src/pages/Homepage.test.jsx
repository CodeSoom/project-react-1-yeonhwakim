import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import HomePage from './HomePage';

describe('HomePage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      roomList: [],
    }));
  });

  it('render room title', () => {
    const { container } = render((
      <HomePage />
    ));

    expect(container).toHaveTextContent('Home!!!!');
  });

  it('loads room list', () => {
    render((
      <HomePage />
    ));

    expect(dispatch).toBeCalled();
  });
});
