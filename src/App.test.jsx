import React from 'react';

import { MemoryRouter } from 'react-router-dom';

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
      voteList: [],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('default path renders vote page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Vote for lunch!!!');
    });
  });

  context('with path /vote', () => {
    it('renders the vote page', () => {
      const { container } = renderApp({ path: '/vote' });

      expect(container).toHaveTextContent('Vote for lunch!!!');
    });
  });

  context('without local storage token', () => {
    const accessToken = 'user1';

    beforeEach(() => {
      loadItem.mockImplementation(() => null);
    });

    it('save token', () => {
      renderApp({ path: '/' });

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
      renderApp({ path: '/' });

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
