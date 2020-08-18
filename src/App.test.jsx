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
      roomList: [],
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

  context('with path /home/1', () => {
    it('default path renders vote page', () => {
      const { container } = renderApp({ path: '/home/1' });

      expect(container).toHaveTextContent('Home!!!!');
    });
  });

  context('with path /home/1/room/우디/vote', () => {
    it('renders the vote page', () => {
      const { container } = renderApp({ path: '/home/1/room/우디/vote' });

      expect(container).toHaveTextContent('Vote for lunch!!!');
    });
  });

  context('with path /home/1/room/우디/menu', () => {
    it('renders the menu page', () => {
      const { container } = renderApp({ path: '/home/1/room/우디/menu' });

      expect(container).toHaveTextContent('Menu!!!!');
    });
  });

  context('without local storage token', () => {
    const accessToken = 'user1';

    beforeEach(() => {
      loadItem.mockImplementation(() => null);
    });

    it('save token', () => {
      renderApp({ path: '/home/1' });

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
      renderApp({ path: '/home/1' });

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
