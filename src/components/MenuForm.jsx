import React from 'react';

export default function MenuForm({ field }) {
  return (
    <>
      <form>
        <input type="text" placeholder="menu" value={field} />
        <button type="submit">추가</button>
      </form>
    </>
  );
}
