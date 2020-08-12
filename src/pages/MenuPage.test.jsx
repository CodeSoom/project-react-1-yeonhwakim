import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MenuPage from './MenuPage';

describe('MenuPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      menuList: [],
    }));
  });

  it('render menu title', () => {
    const { container } = render((
      <MenuPage />
    ));

    expect(container).toHaveTextContent('Menu!!!!');
  });

  it('loads vote list', () => {
    render((
      <MenuPage />
    ));
    expect(dispatch).toBeCalled();
  });
});
