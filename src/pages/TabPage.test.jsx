import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import TabPage from './TabPage';

describe('TabPage', () => {
  it('renders tab menus', () => {
    const { container } = render((
      <MemoryRouter>
        <TabPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('VOTE');
    expect(container).toHaveTextContent('MENU');
  });
});
