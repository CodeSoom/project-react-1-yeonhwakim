import React from 'react';

import MenuItem from './MenuItem';

export default function MenuList({ menuList, onClick }) {
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
          menuList.map((menuItem) => (
            <MenuItem
              key={menuItem.id}
              menuItem={menuItem}
              onClick={onClick}
            />
          ))
        }
      </ul>
    </>
  );
}
