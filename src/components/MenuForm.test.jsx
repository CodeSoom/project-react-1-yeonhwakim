import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import MenuForm from './MenuForm';

describe('MenuForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderMenuForm(newMenu) {
    return render((
      <MenuForm
        field={newMenu}
        onChange={handleChange}
        onSubmit={handleSubmit}
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

  it('renders “추가” button', () => {
    const { getByText } = renderMenuForm();

    fireEvent.click(getByText('추가'));

    expect(handleSubmit).toBeCalled();
  });
});
