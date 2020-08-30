import React from 'react';

import RoomItem from './RoomItem';

export default function RoomList({ homeId, roomList }) {
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
              homeId={homeId}
              key={roomItem.id}
              roomItem={roomItem}
            />
          ))
        }
      </ul>
    </>
  );
}
