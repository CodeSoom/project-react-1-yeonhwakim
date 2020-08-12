import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadMenuList,
} from '../redux/slice';

import { get } from '../utils/utils';

export default function MenuContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenuList());
  }, []);

  const menuList = useSelector(get('menuList'));

  return (
    <>
      <ul>
        {
          menuList.map((menuItem) => (
            <li key={menuItem.id}>{menuItem.name}</li>
          ))
        }
      </ul>
    </>
  );
}
