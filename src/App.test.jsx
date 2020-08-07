import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { loadItem, saveItem } from './services/storage';

jest.mock('react-redux');
jest.mock('./services/storage');

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

  context('without local storage token', () => {
    const accessToken = 'user1';

    beforeEach(() => {
      loadItem.mockImplementation(() => null);
    });

    it('save token', () => {
      render((
        <App />
      ));
      saveItem.mockImplementation(() => accessToken);
      expect(saveItem('accessToken')).toBe(accessToken);
    });
  });

  context('with local storage token', () => {
    const accessToken = 'user1';

    beforeEach(() => {
      loadItem.mockImplementation(() => accessToken);
    });

    it('loadUser', () => {
      render((
        <App />
      ));
      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
