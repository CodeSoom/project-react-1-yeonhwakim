import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import VoteItem from './VoteItem';

describe('VoteItem', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderVoteItem(restaurantItem) {
    return render(<VoteItem
      restaurantItem={restaurantItem}
      onClick={handleClick}
    />);
  }

  it('renders restaurant item', () => {
    const restaurantItem = { id: 'no1', name: '국수나무', count: 0 };

    const { container } = renderVoteItem(restaurantItem);

    expect(container).toHaveTextContent('국수나무0');
  });

  it('listens click event', () => {
    const restaurantItem = { id: 'no1', name: '국수나무', count: 0 };

    const { getByText } = renderVoteItem(restaurantItem);

    fireEvent.click(getByText('국수나무0'));
    expect(handleClick).toBeCalledWith(restaurantItem.id);
  });
});
