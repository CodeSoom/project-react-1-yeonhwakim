import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('redner Hello, world!', () => {
    const { container } = render((
      <App />
    ));
    expect(container).toHaveTextContent('Hello, world!');
  });
});
