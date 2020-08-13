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
      newMenu: given.newMenu,
    }));
  });

  function renderMenuContainer() {
    return render((
      <MenuContainer />
    ));
  }
  given('menuList', () => (MENULIST));
  given('newMenu', () => ('김밥천국'));

  it('renders menuList', () => {
    const { container } = renderMenuContainer();
    expect(dispatch).toBeCalledTimes(1);

    MENULIST.forEach(({ name }) => (
      expect(container).toHaveTextContent(`${name}`)
    ));
  });

  it('renders menuForm', () => {
    const { container, getByDisplayValue } = renderMenuContainer();

    expect(container).toHaveTextContent('추가');
    expect(getByDisplayValue('김밥천국')).toBeTruthy();
  });
});
