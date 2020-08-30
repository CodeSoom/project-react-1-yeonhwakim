import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RoomItem from './RoomItem';

import HOME from '../../fixtures/home';

describe('RoomItem', () => {
  function renderRoomItem({ homeId, roomItem }) {
    return render(
      <MemoryRouter>
        <RoomItem
          homeId={homeId}
          roomItem={roomItem}
        />
      </MemoryRouter>,
    );
  }

  it('renders room item', () => {
    const homeId = HOME[0].id;
    const roomItem = HOME[0].room[0];

    const { container } = renderRoomItem({ homeId, roomItem });

    expect(container).toHaveTextContent('우디');
  });
});
