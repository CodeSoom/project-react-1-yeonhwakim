import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RoomItem from './RoomItem';

import HOME from '../../fixtures/home';

describe('RoomItem', () => {
  const handleClick = jest.fn();

  function renderRoomItem(roomItem) {
    return render(<RoomItem
      roomItem={roomItem}
      onClick={handleClick}
    />);
  }

  it('renders room item', () => {
    const roomItem = HOME[0].room[0];

    const { container } = renderRoomItem(roomItem);

    expect(container).toHaveTextContent('우디');
  });

  it('listens click event', () => {
    const roomItem = HOME[0].room[0];

    const { getByText } = renderRoomItem(roomItem);

    fireEvent.click(getByText(HOME[0].room[0].name));

    expect(handleClick).toBeCalledWith(HOME[0].room[0].id);
  });
});
