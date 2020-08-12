import React from 'react';

import { render } from '@testing-library/react';

import MenuItem from './MenuItem';

import MENULIST from '../../fixtures/menuList';

describe('MenuItem', () => {
  function renderMenuItem(menuItem) {
    return render(<MenuItem
      menuItem={menuItem}
    />);
  }

  it('renders menu item', () => {
    const menuItem = MENULIST[0];

    const { container } = renderMenuItem(menuItem);

    expect(container).toHaveTextContent('국수나무');
  });
});
