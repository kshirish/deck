import React from 'react';

import Grid from '../components/Grid';

const { Row, Col } = Grid;

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {},
};

const COL_STYLE = {
  backgroundColor: '#e4e4e4',
  marginBottom: 15,
  padding: 15,
};

export const Basic = () => (
  <>
    <Row>
      <Col md={2}>
        <div style={COL_STYLE}>column-2</div>
      </Col>
      <Col md={8}>
        <div style={COL_STYLE}>column-8</div>
      </Col>
      <Col md={2}>
        <div style={COL_STYLE}>column-2</div>
      </Col>
    </Row>
    <Row>
      <Col md={3}>
        <div style={COL_STYLE}>column-2</div>
      </Col>
      <Col md={6}>
        <div style={COL_STYLE}>column-6</div>
      </Col>
      <Col md={3}>
        <div style={COL_STYLE}>column-3</div>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <div style={COL_STYLE}>column-2</div>
      </Col>
      <Col md={4}>
        <div style={COL_STYLE}>column-6</div>
      </Col>
      <Col md={4}>
        <div style={COL_STYLE}>column-3</div>
      </Col>
    </Row>
  </>
);

export const Offset = () => (
  <>
    <Row>
      <Col mdOffset={10} md={2}>
        <div style={COL_STYLE}>column-2 offset 10</div>
      </Col>
    </Row>
    <Row>
      <Col mdOffset={8} md={4}>
        <div style={COL_STYLE}>column-4 offset 8</div>
      </Col>
    </Row>
    <Row>
      <Col mdOffset={6} md={6}>
        <div style={COL_STYLE}>column-6 offset 6</div>
      </Col>
    </Row>
    <Row>
      <Col mdOffset={4} md={8}>
        <div style={COL_STYLE}>column-8 offset 4</div>
      </Col>
    </Row>
  </>
);

export const AutoWidth = () => (
  <>
    <Row>
      <Col>
        <div style={COL_STYLE}>column</div>
      </Col>
      <Col>
        <div style={COL_STYLE}>column</div>
      </Col>
    </Row>
    <Row>
      <Col>
        <div style={COL_STYLE}>column</div>
      </Col>
      <Col>
        <div style={COL_STYLE}>column</div>
      </Col>
      <Col>
        <div style={COL_STYLE}>column</div>
      </Col>
    </Row>
    <Row>
      <Col>
        <div style={COL_STYLE}>column</div>
      </Col>
      <Col>
        <div style={COL_STYLE}>column</div>
      </Col>
      <Col>
        <div style={COL_STYLE}>column</div>
      </Col>
      <Col>
        <div style={COL_STYLE}>column</div>
      </Col>
    </Row>
  </>
);

export const NestedGrids = () => (
  <Row>
    <Col md={2}>
      <div style={COL_STYLE}>column-2</div>
    </Col>
    <Col md={8}>
      <Row>
        <Col md={4}>
          <div style={COL_STYLE}>column-2</div>
        </Col>
        <Col md={4}>
          <div style={COL_STYLE}>column-6</div>
        </Col>
        <Col md={4}>
          <div style={COL_STYLE}>column-3</div>
        </Col>
      </Row>
    </Col>
    <Col md={2}>
      <div style={COL_STYLE}>column-2</div>
    </Col>
    <Col md={3}>
      <div style={COL_STYLE}>column-2</div>
    </Col>
    <Col md={6}>
      <div style={COL_STYLE}>column-6</div>
    </Col>
    <Col md={3}>
      <div style={COL_STYLE}>column-3</div>
    </Col>
  </Row>
);

export const AlignmentHorizontal = () => (
  <>
    <Row mdStart>
      <Col md={4}>
        <div style={COL_STYLE}>column-4</div>
      </Col>
    </Row>
    <Row mdCenter>
      <Col md={4}>
        <div style={COL_STYLE}>column-4</div>
      </Col>
    </Row>
    <Row mdEnd>
      <Col md={4}>
        <div style={COL_STYLE}>column-4</div>
      </Col>
    </Row>
  </>
);

export const AlignmentVertical = () => (
  <>
    <Row mdTop>
      <Col md={4}>
        <div style={COL_STYLE}>column-4</div>
      </Col>
      <Col md={8}>
        <div style={{ ...COL_STYLE, height: 100 }}>column-8</div>
      </Col>
    </Row>
    <Row mdMiddle>
      <Col md={4}>
        <div style={COL_STYLE}>column-4</div>
      </Col>
      <Col md={8}>
        <div style={{ ...COL_STYLE, height: 100 }}>column-8</div>
      </Col>
    </Row>
    <Row mdBottom>
      <Col md={4}>
        <div style={COL_STYLE}>column-4</div>
      </Col>
      <Col md={8}>
        <div style={{ ...COL_STYLE, height: 100 }}>column-8</div>
      </Col>
    </Row>
  </>
);

export const Spacing = () => (
  <>
    <Row mdAround>
      <Col md={2}>
        <div style={COL_STYLE}>column-2</div>
      </Col>
      <Col md={2}>
        <div style={COL_STYLE}>column-2</div>
      </Col>
      <Col md={2}>
        <div style={COL_STYLE}>column-2</div>
      </Col>
    </Row>

    <Row mdBetween>
      <Col md={2}>
        <div style={COL_STYLE}>column-2</div>
      </Col>
      <Col md={2}>
        <div style={COL_STYLE}>column-2</div>
      </Col>
      <Col md={2}>
        <div style={COL_STYLE}>column-2</div>
      </Col>
    </Row>
  </>
);
