import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
    }));
  });

  it('redners vote header', () => {
    const { container } = render((
      <App />
    ));
    expect(container).toHaveTextContent('Vote for lunch!!!');
  });

  it('loads restaurants list', () => {
    render((
      <App />
    ));
    expect(dispatch).toBeCalled();
  });
});
