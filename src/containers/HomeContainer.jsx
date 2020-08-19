import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  loadRoomList,
} from '../redux/slice';

import { get } from '../utils/utils';

import RoomList from '../components/RoomList';

export default function HomeContainer({ homeId }) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadRoomList(homeId));
  }, []);

  const roomList = useSelector(get('roomList'));

  function handleClick(roomId) {
    return history.push(`/home/${homeId}/room/${roomId}/vote`);
  }

  return (
    <>
      <RoomList
        roomList={roomList}
        onClick={handleClick}
      />
    </>
  );
}
