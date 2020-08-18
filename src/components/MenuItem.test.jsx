import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import MenuItem from './MenuItem';

import MENULIST from '../../fixtures/menuList';

describe('MenuItem', () => {
  const handleClickDelete = jest.fn();
  const handleBlur = jest.fn();

  beforeEach(() => {
    handleClickDelete.mockClear();
    handleBlur.mockClear();
  });

  function renderMenuItem(menuItem) {
    return render(<MenuItem
      menuItem={menuItem}
      onClick={handleClickDelete}
      onBlur={handleBlur}
    />);
  }

  it('renders menu item and delete button', () => {
    const menuItem = MENULIST[0];

    const { container } = renderMenuItem(menuItem);

    expect(container).toHaveTextContent('국수나무');
    expect(container).toHaveTextContent('삭제');
  });

  it('listens click event', () => {
    const menuItem = MENULIST[0];

    const { getByText } = renderMenuItem(menuItem);

    fireEvent.click(getByText('삭제'));

    expect(handleClickDelete).toBeCalledWith(menuItem.id);
  });

  it('listens blur event', () => {
    const menuItem = MENULIST[0];

    const { getByText } = renderMenuItem(menuItem);

    const span = getByText(menuItem.name);
    const updateId = 'no1';
    const updateName = '국시나무';

    fireEvent.blur(span, { target: { textContent: updateName } });

    expect(handleBlur).toBeCalledWith({ updateId, updateName });
  });
});
