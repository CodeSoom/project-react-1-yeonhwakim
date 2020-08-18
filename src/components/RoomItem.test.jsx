import React from 'react';

import { render } from '@testing-library/react';

import RoomItem from './RoomItem';

import HOME from '../../fixtures/home';

describe('RoomItem', () => {
  function renderRoomItem(roomItem) {
    return render(<RoomItem
      roomItem={roomItem}
    />);
  }

  it('renders room item', () => {
    const roomItem = HOME[0].room[0];

    const { container } = renderRoomItem(roomItem);

    expect(container).toHaveTextContent('우디');
  });
});
