import React from 'react';

export default function MenuList({ menuList }) {
  if (!(menuList || []).length) {
    return (
      <>
        <p>
          식당을 추가해주세요~
        </p>
      </>
    );
  }

  return (
    <>
      <ul>
        {
          menuList.map((MenuItem) => (
            <li key={MenuItem.id}>{MenuItem.name}</li>
          ))
        }
      </ul>
    </>
  );
}
