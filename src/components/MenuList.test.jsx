import React from 'react';

import { render } from '@testing-library/react';

import MenuList from './MenuList';

import MENULIST from '../../fixtures/menuList';

describe('MenuList', () => {
  context('with menu list', () => {
    it('renders menu list', () => {
      const menuList = MENULIST;

      const { container } = render((<MenuList menuList={menuList} />));

      MENULIST.forEach(({ name }) => (
        expect(container).toHaveTextContent(`${name}`)
      ));
    });
  });

  context('without menu list', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((menuList) => {
        const { container } = render((<MenuList menuList={menuList} />));

        expect(container).toHaveTextContent('식당을 추가해주세요~');
      });
    });
  });
});
