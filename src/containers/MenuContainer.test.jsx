import React from 'react';

import { render } from '@testing-library/react';

import MenuContainer from './MenuContainer';

import MENULIST from '../../fixtures/menuList';

jest.mock('react-redux');

describe('MenuContainer', () => {
  it('renders menuList', () => {
    const { container } = render((
      <MenuContainer />
    ));

    MENULIST.forEach(({ name }) => (
      expect(container).toHaveTextContent(`${name}`)
    ));
  });
});
