import React from 'react';

import { render } from '@testing-library/react';

import VoteItem from './VoteItem';

describe('VoteItem', () => {
  it('renders restaurant item', () => {
    const restaurantItem = { id: 'no1', name: '국수나무', count: 0 };

    const { container } = render((
      <VoteItem restaurantItem={restaurantItem} />
    ));

    expect(container).toHaveTextContent('국수나무||0');
  });
});
