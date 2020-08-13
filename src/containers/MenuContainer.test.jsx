import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MenuContainer from './MenuContainer';

import MENULIST from '../../fixtures/menuList';

jest.mock('react-redux');

describe('MenuContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      menuList: given.menuList,
    }));
  });

  given('menuList', () => (MENULIST));

  it('renders menuList', () => {
    const { container } = render((
      <MenuContainer />
    ));

    expect(dispatch).toBeCalledTimes(1);

    MENULIST.forEach(({ name }) => (
      expect(container).toHaveTextContent(`${name}`)
    ));
  });
});
