import React from 'react';

import { render } from '@testing-library/react';

import VoteList from './VoteList';

describe('VoteList', () => {
  context('with vote list', () => {
    it('renders vote list', () => {
      const voteList = [
        { id: 'no1', name: '국수나무', count: 0 },
        { id: 'no2', name: '요기맘', count: 0 },
        { id: 'no3', name: '구내식당', count: 0 },
        { id: 'no4', name: '돈푸대', count: 0 },
        { id: 'no5', name: '태양식당', count: 0 },
      ];

      const { container } = render((<VoteList voteList={voteList} />));

      expect(container).toHaveTextContent('국수나무0');
      expect(container).toHaveTextContent('요기맘0');
      expect(container).toHaveTextContent('구내식당0');
      expect(container).toHaveTextContent('돈푸대0');
      expect(container).toHaveTextContent('태양식당0');
    });
  });

  context('without vote list', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((voteList) => {
        const { container } = render((<VoteList voteList={voteList} />));

        expect(container).toHaveTextContent('투표할 식당이 없어요! 식당을 추가해주세요~');
      });
    });
  });
});
