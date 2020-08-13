import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadMenuList,
} from '../redux/slice';

import { get } from '../utils/utils';

import MenuList from '../components/MenuList';

export default function MenuContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenuList());
  }, []);

  const menuList = useSelector(get('menuList'));

  return (
    <>
      <MenuList menuList={menuList} />
    </>
  );
}
