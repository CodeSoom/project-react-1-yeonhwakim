import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import MenuForm from './MenuForm';

describe('MenuForm', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderMenuForm(newMenu) {
    return render((
      <MenuForm
        field={newMenu}
        onChange={handleChange}
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

  it('listens change events', () => {
    const { getByPlaceholderText } = renderMenuForm();

    const control = { placeholder: 'menu', value: '김밥천국' };
    const { value } = control;

    const input = getByPlaceholderText(control.placeholder);

    fireEvent.change(input, { target: { value } });

    expect(handleChange).toBeCalledWith({ value });
  });
});
