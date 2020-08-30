import React, { useState } from 'react';

import Tab from '../components/Tab';

export default {
  title: 'Tab',
  component: Tab,
  argTypes: {},
};

const panes = [
  { menuItem: 'Tab 1', render: () => <div>Tab 1 Content</div> },
  { menuItem: 'Tab 2', render: () => <div>Tab 2 Content</div> },
  { menuItem: 'Tab 3', render: () => <div>Tab 3 Content</div> },
];

export const Basic = () => {
  const [activeTab, setActiveTab] = useState('Tab 2');

  return (
    <Tab
      activeTab={activeTab}
      onChange={newActiveTab => setActiveTab(newActiveTab)}
      panes={panes}
    />
  );
};
