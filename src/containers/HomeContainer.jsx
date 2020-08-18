import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRoomList,
} from '../redux/slice';

import { get } from '../utils/utils';

export default function HomeContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRoomList());
  }, []);

  const roomList = useSelector(get('roomList'));

  return (
    <>
      <ul>
        {roomList.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}
