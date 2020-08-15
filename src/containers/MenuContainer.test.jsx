import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MenuContainer from './MenuContainer';

import MENULIST from '../../fixtures/menuList';

jest.mock('react-redux');

describe('MenuContainer', () => {
  const dispatch = jest.fn();

  function renderMenuContainer() {
    return render((
      <MenuContainer />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      menuList: given.menuList,
      newMenu: given.newMenu,
    }));
  });

  context('with menuList', () => {
    given('menuList', () => (MENULIST));

    it('renders menuList', () => {
      const { container, getAllByText } = renderMenuContainer();
      expect(dispatch).toBeCalledTimes(1);

      MENULIST.forEach(({ name }) => (
        expect(container).toHaveTextContent(`${name}`)
      ));

      expect(getAllByText('삭제')).toBeTruthy();
    });

    it('listens delete click event', () => {
      const { getByTestId } = renderMenuContainer();

      fireEvent.click(getByTestId(MENULIST[0].id));

      expect(dispatch).toBeCalledTimes(3);
    });

    it('listens blur events', () => {
      const { getByText } = renderMenuContainer();

      fireEvent.blur(getByText(MENULIST[0].name), { target: { textContent: '국시나무' } });

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('with given newMenu', () => {
    given('newMenu', () => ('김밥천국'));

    it('renders menuForm', () => {
      const { container, getByDisplayValue } = renderMenuContainer();

      expect(container).toHaveTextContent('추가');
      expect(getByDisplayValue('김밥천국')).toBeTruthy();
    });

    it('listens click events', () => {
      const { getByText } = renderMenuContainer();

      fireEvent.click(getByText('추가'));

      expect(dispatch).toBeCalledTimes(3);
    });
  });

  context('without given newMenu', () => {
    given('newMenu', () => (''));

    it('listens change events', () => {
      const { getByPlaceholderText } = renderMenuContainer();

      const control = { placeholder: 'menu', value: '김밥천국' };
      const { value } = control;

      const input = getByPlaceholderText(control.placeholder);

      fireEvent.change(input, { target: { value } });

      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toBeCalledWith({
        type: 'application/setNewMenu',
        payload: value,
      });
    });
  });
});
