import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadMenuList,
  setNewMenu,
} from '../redux/slice';

import { get } from '../utils/utils';

import MenuForm from '../components/MenuForm';
import MenuList from '../components/MenuList';

export default function MenuContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenuList());
  }, []);

  const newMenu = useSelector(get('newMenu'));
  const menuList = useSelector(get('menuList'));

  const handleChange = ({ value }) => {
    dispatch(setNewMenu(value));
  };

  return (
    <>
      <MenuForm
        field={newMenu}
        onChange={handleChange}
      />
      <MenuList menuList={menuList} />
    </>
  );
}
