import React from 'react';

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
            <li key={roomItem.id}>
              {roomItem.name}
            </li>
          ))
        }
      </ul>
    </>
  );
}
