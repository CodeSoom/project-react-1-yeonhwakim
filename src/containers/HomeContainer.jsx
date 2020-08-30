import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRoomList,
} from '../redux/slice';

import { get } from '../utils/utils';

import RoomList from '../components/RoomList';

export default function HomeContainer({ homeId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRoomList(homeId));
  }, []);

  const roomList = useSelector(get('roomList'));

  return (
    <>
      <RoomList
        homeId={homeId}
        roomList={roomList}
      />
    </>
  );
}
