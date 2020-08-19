import React from 'react';

import { Link } from 'react-router-dom';

export default function TabPage() {
  return (
    <>
      <Link to="vote">VOTE</Link>
      <Link to="menu">MENU</Link>
    </>
  );
}
