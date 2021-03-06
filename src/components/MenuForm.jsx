import React from 'react';

export default function MenuForm({ field, onChange, onSubmit }) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="menu"
          value={field}
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={handleSubmit}
        >
          추가
        </button>
      </form>
    </>
  );
}
