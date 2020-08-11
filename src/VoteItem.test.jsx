import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import VoteItem from './VoteItem';

describe('VoteItem', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderVoteItem(voteItem, voteId) {
    return render(<VoteItem
      voteItem={voteItem}
      voteId={voteId}
      onClick={handleClick}
    />);
  }

  it('renders vote item', () => {
    const voteItem = { id: 'no1', name: '국수나무', count: 0 };

    const { container } = renderVoteItem(voteItem);

    expect(container).toHaveTextContent('국수나무0');
  });

  it('listens click event', () => {
    const voteItem = { id: 'no1', name: '국수나무', count: 0 };

    const { getByText } = renderVoteItem(voteItem);

    fireEvent.click(getByText('국수나무0'));
    expect(handleClick).toBeCalledWith(voteItem.id);
  });

  context('with initial voteId', () => {
    it('renders checked vote item', () => {
      const voteItem = { id: 'no1', name: '국수나무', count: 1 };
      const voteId = 'no1';

      const { container } = renderVoteItem(voteItem, voteId);

      expect(container).toHaveTextContent('(V) 국수나무1');
    });
  });

  context('without initial voteId', () => {
    it('renders checked vote item', () => {
      const voteItem = { id: 'no1', name: '국수나무', count: 0 };
      const voteId = '';

      const { container } = renderVoteItem(voteItem, voteId);

      expect(container).toHaveTextContent('국수나무0');
    });
  });
});
