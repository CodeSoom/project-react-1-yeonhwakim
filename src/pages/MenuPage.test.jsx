import React from 'react';

import { render } from '@testing-library/react';

import MenuPage from './MenuPage';

describe('MenuPage', () => {
  it('render menu title', () => {
    const { container } = render((
      <MenuPage />
    ));

    expect(container).toHaveTextContent('Menu!!!!');
  });
});
