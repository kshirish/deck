import React from 'react';

import Placeholder from '../components/Placeholder';
import Grid from '../components/Grid';

const { Row, Col } = Grid;

export default {
  title: 'Placeholder',
  component: Placeholder,
  argTypes: {},
};

export const Basic = () => (
  <>
    <Row mdMiddle>
      <Col md={2}>
        <Placeholder circle style={{ width: 150, height: 150 }} />
      </Col>
      <Col md={10}>
        <Placeholder style={{ width: '100%', height: 10 }} />
        <Placeholder style={{ width: '80%', height: 10 }} />
        <Placeholder style={{ width: '70%', height: 10 }} />
        <Placeholder style={{ width: '50%', height: 10 }} />
      </Col>
    </Row>

    <Row>
      <Col>
        <Placeholder style={{ width: '100%', height: 200 }} />
        <Placeholder style={{ width: '100%', height: 10 }} />
        <Placeholder style={{ width: '80%', height: 10 }} />
        <Placeholder style={{ width: '70%', height: 10 }} />
        <Placeholder style={{ width: '50%', height: 10 }} />
      </Col>
      <Col>
        <Placeholder style={{ width: '100%', height: 200 }} />
        <Placeholder style={{ width: '100%', height: 10 }} />
        <Placeholder style={{ width: '80%', height: 10 }} />
        <Placeholder style={{ width: '70%', height: 10 }} />
        <Placeholder style={{ width: '50%', height: 10 }} />
      </Col>
      <Col>
        <Placeholder style={{ width: '100%', height: 200 }} />
        <Placeholder style={{ width: '100%', height: 10 }} />
        <Placeholder style={{ width: '80%', height: 10 }} />
        <Placeholder style={{ width: '70%', height: 10 }} />
        <Placeholder style={{ width: '50%', height: 10 }} />
      </Col>
    </Row>
  </>
);
