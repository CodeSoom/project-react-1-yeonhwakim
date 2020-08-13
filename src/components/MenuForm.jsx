import React from 'react';

export default function MenuForm({ field, onChange }) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ value });
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
        <button type="submit">추가</button>
      </form>
    </>
  );
}
