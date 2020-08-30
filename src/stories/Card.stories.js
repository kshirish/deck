import React from 'react';

import Card from '../components/Card';
import Button from '../components/Button';

export default {
  title: 'Card',
  component: Card,
  argTypes: {},
};

export const Basic = () => (
  <Card style={{ width: '300px' }}>
    <Card.Image src="https://picsum.photos/500" alt="This is card header" />
    <Card.Content>
      <Card.Header>This is card header</Card.Header>
      <Card.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quidem,
        repellendus minima id aliquid a delectus commodi voluptates ea est velit
        reprehenderit, reiciendis eveniet totam cumque labore alias neque error!
      </Card.Description>
    </Card.Content>
    <Card.Footer>
      <Button type="secondary">Read more</Button>
      <Button>Bookmark</Button>
    </Card.Footer>
  </Card>
);

export const Horizontal = () => (
  <Card style={{ width: '500px' }} horizontal>
    <Card.Image src="https://picsum.photos/500" alt="This is card header" />
    <Card.Stacked>
      <Card.Content>
        <Card.Header>This is card header</Card.Header>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quidem,
          repellendus minima id aliquid a delectus commodi voluptates ea est
          velit reprehenderit, reiciendis eveniet totam cumque labore alias
          neque error!
        </Card.Description>
      </Card.Content>
      <Card.Footer>
        <Button type="secondary">Read more</Button>
        <Button>Bookmark</Button>
      </Card.Footer>
    </Card.Stacked>
  </Card>
);
