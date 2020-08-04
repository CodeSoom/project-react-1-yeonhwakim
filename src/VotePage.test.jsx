import React from 'react';

import { render } from '@testing-library/react';

import VotePage from './VotePage';

describe('VotePage', () => {
  it('redners vote header', () => {
    const { container } = render((
      <VotePage />
    ));
    expect(container).toHaveTextContent('Vote for lunch!!!');
  });

  it('redners restaurants list', () => {
    const { container } = render((
      <VotePage />
    ));
    expect(container).toHaveTextContent('국수나무');
    expect(container).toHaveTextContent('요기맘');
    expect(container).toHaveTextContent('구내식당');
    expect(container).toHaveTextContent('돈푸대');
    expect(container).toHaveTextContent('태양식당');
  });
});
