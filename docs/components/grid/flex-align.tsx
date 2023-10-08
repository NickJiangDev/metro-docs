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

const DemoBox: React.FC<{ children: React.ReactNode; value: number }> = (
  props,
) => (
  <p style={{ height: props.value, lineHeight: `${props.value}px` }}>
    {props.children}
  </p>
);

const App: React.FC = () => (
  <>
    <Divider orientation="left">Align Top</Divider>
    <Row justify="center" align="top">
      <Col style={colStyle} span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col style={colStyle} span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col style={colStyle} span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col style={colStyle} span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <Divider orientation="left">Align Middle</Divider>
    <Row justify="space-around" align="middle">
      <Col style={colStyle} span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col style={colStyle} span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col style={colStyle} span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col style={colStyle} span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <Divider orientation="left">Align Bottom</Divider>
    <Row justify="space-between" align="bottom">
      <Col style={colStyle} span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col style={colStyle} span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col style={colStyle} span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col style={colStyle} span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
  </>
);

export default App;
