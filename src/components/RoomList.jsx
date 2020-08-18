import React from 'react';

import RoomItem from './RoomItem';

export default function RoomList({ roomList }) {
  if (!(roomList || []).length) {
    return (
      <>
        <p>
          투표방을 추가해주세요~
        </p>
      </>
    );
  }

  return (
    <>
      <ul>
        {
          roomList.map((roomItem) => (
            <RoomItem
              key={roomItem.id}
              roomItem={roomItem}
            />
          ))
        }
      </ul>
    </>
  );
}
