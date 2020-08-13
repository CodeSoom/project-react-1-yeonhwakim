import React from 'react';

import { render } from '@testing-library/react';

import MenuForm from './MenuForm';

describe('MenuForm', () => {
  function renderMenuForm(newMenu) {
    return render((
      <MenuForm
        field={newMenu}
      />
    ));
  }

  it('renders input', () => {
    const newMenu = '김밥천국';

    const { getByPlaceholderText } = renderMenuForm(newMenu);

    const control = { placeholder: 'menu', value: newMenu };

    const input = getByPlaceholderText(control.placeholder);
    expect(input.value).toBe(control.value);
  });
});
