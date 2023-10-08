import { Col, Divider, Row } from '@metro/components';
import React from 'react';

const style: React.CSSProperties = {
  backgroundColor: 'var(--metro-primary-default)',
};
const colStyle: React.CSSProperties = {
  minHeight: '30px',
  color: 'var(--metro-text-static-0)',
  backgroundColor: 'var(--metro-primary-light-1)',
  textAlign: 'center',
  lineHeight: '30px',
  outline: '1px solid var(--metro-divider-0)',
};

const App: React.FC = () => (
  <>
    <Divider orientation="left">Horizontal</Divider>
    <Row gutter={16}>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Responsive</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Vertical</Divider>
    <Row gutter={[16, 24]}>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col style={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
);

export default App;
