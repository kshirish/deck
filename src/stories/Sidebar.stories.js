import React from 'react';

import Sidebar from '../components/Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
  argTypes: {},
};

export const Basic = () => (
  <Sidebar style={{ width: 200 }}>
    <Sidebar.Menu>
      <Sidebar.MenuHeader>Browse</Sidebar.MenuHeader>
      <Sidebar.MenuItem>Charts</Sidebar.MenuItem>
      <Sidebar.MenuItem>Genres</Sidebar.MenuItem>
      <Sidebar.MenuItem active>New Releases</Sidebar.MenuItem>
      <Sidebar.MenuItem>Recommended</Sidebar.MenuItem>
    </Sidebar.Menu>

    <Sidebar.Menu>
      <Sidebar.MenuHeader>Your library</Sidebar.MenuHeader>
      <Sidebar.MenuItem>Recently Played</Sidebar.MenuItem>
      <Sidebar.MenuItem>Songs</Sidebar.MenuItem>
      <Sidebar.MenuItem>Albums</Sidebar.MenuItem>
      <Sidebar.MenuItem>Artists</Sidebar.MenuItem>
    </Sidebar.Menu>

    <Sidebar.Menu>
      <Sidebar.MenuHeader>Playlists</Sidebar.MenuHeader>
      <Sidebar.MenuItem>Favorite Songs</Sidebar.MenuItem>
      <Sidebar.MenuItem>Deep House</Sidebar.MenuItem>
      <Sidebar.MenuItem>Chill Rock</Sidebar.MenuItem>
      <Sidebar.MenuItem>Friday Nights</Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar>
);
