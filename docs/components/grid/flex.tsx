import { Col, Divider, Row } from '@metro/components';
import React from 'react';

const colStyle: React.CSSProperties = {
  minHeight: '30px',
  marginTop: '8px',
  marginBottom: '8px',
  color: 'var(--metro-text-static-0)',
  textAlign: 'center',
  backgroundColor: 'var(--metro-primary-default)',
  lineHeight: '30px',
  outline: '1px solid var(--metro-divider-0)',
};

const App: React.FC = () => (
  <>
    <Divider orientation="left">sub-element align left</Divider>
    <Row justify="start">
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
    </Row>

    <Divider orientation="left">sub-element align center</Divider>
    <Row justify="center">
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
    </Row>

    <Divider orientation="left">sub-element align right</Divider>
    <Row justify="end">
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
    </Row>

    <Divider orientation="left">sub-element monospaced arrangement</Divider>
    <Row justify="space-between">
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
    </Row>

    <Divider orientation="left">sub-element align full</Divider>
    <Row justify="space-around">
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
    </Row>

    <Divider orientation="left">sub-element align evenly</Divider>
    <Row justify="space-evenly">
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
      <Col style={colStyle} span={4}>
        col-4
      </Col>
    </Row>
  </>
);

export default App;
