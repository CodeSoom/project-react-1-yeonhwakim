import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadMenuList,
  sendDeleteMenuId,
  setNewMenu,
  sendNewMenu,
  sendUpdateMenu,
} from '../redux/slice';

import { get } from '../utils/utils';

import MenuForm from '../components/MenuForm';
import MenuList from '../components/MenuList';

export default function MenuContainer({ homeId, roomId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenuList({ homeId, roomId }));
  }, []);

  const newMenu = useSelector(get('newMenu'));
  const menuList = useSelector(get('menuList'));

  const handleChange = ({ value }) => {
    dispatch(setNewMenu(value));
  };

  const handleSubmit = () => {
    dispatch(sendNewMenu(newMenu));
    dispatch(loadMenuList({ homeId, roomId }));
  };

  const handleClickDelete = (deleteId) => {
    dispatch(sendDeleteMenuId(deleteId));
    dispatch(loadMenuList({ homeId, roomId }));
  };

  const handleBlur = ({ updateId, updateName }) => {
    dispatch(sendUpdateMenu({ updateId, updateName }));
  };

  return (
    <>
      <MenuForm
        field={newMenu}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <MenuList
        menuList={menuList}
        onClick={handleClickDelete}
        onBlur={handleBlur}
      />
    </>
  );
}
