import React, { useState } from 'react';

import Modal from '../components/Modal';
import Button from '../components/Button';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {},
};

export const Basic = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Modal title</Modal.Header>
      <Modal.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga velit
        autem corporis voluptate voluptas, maxime nam facere enim! Praesentium
        nulla possimus quibusdam labore voluptate tempora quod aliquam. Fugit,
        consectetur.
      </Modal.Content>
      <Modal.Footer>
        <Button type="secondary" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button onClick={() => setOpen(false)}>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
};
