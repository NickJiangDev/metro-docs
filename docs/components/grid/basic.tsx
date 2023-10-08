import { Col, Row } from '@metro/components';
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
    <Row>
      <Col style={colStyle} span={24}>
        col
      </Col>
    </Row>
    <Row>
      <Col style={colStyle} span={12}>
        col-12
      </Col>
      <Col style={colStyle} span={12}>
        col-12
      </Col>
    </Row>
    <Row>
      <Col style={colStyle} span={8}>
        col-8
      </Col>
      <Col style={colStyle} span={8}>
        col-8
      </Col>
      <Col style={colStyle} span={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col style={colStyle} span={6}>
        col-6
      </Col>
      <Col style={colStyle} span={6}>
        col-6
      </Col>
      <Col style={colStyle} span={6}>
        col-6
      </Col>
      <Col style={colStyle} span={6}>
        col-6
      </Col>
    </Row>
  </>
);

export default App;
