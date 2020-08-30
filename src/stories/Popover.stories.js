import React from 'react';

import Popover from '../components/Popover';
import Button from '../components/Button';

export default {
  title: 'Popover',
  component: Popover,
  argTypes: {},
};

export const Basic = () => (
  <Popover trigger={<Button>Show popover</Button>}>This is a popover</Popover>
);

export const Alignment = () => (
  <div style={{ height: 200, display: 'flex', justifyContent: 'center' }}>
    <Popover
      align="left"
      trigger={<Button style={{ alignSelf: 'center' }}>Left popover</Button>}
    >
      This is a popover
    </Popover>
    <Popover
      align="top"
      trigger={<Button style={{ alignSelf: 'center' }}>Top popover</Button>}
    >
      This is a popover
    </Popover>
    <Popover
      align="bottom"
      trigger={<Button style={{ alignSelf: 'center' }}>Bottom popover</Button>}
    >
      This is a popover
    </Popover>
    <Popover
      align="right"
      trigger={<Button style={{ alignSelf: 'center' }}>Right popover</Button>}
    >
      This is a popover
    </Popover>
  </div>
);
