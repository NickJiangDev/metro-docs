import { Col, Row } from '@metro/components';
import React from 'react';

const colStyle: React.CSSProperties = {
  minHeight: '30px',
  marginTop: '8px',
  marginBottom: '8px',
  color: 'var(--metro-text-static-0)',
  backgroundColor: 'var(--metro-primary-default)',
  textAlign: 'center',
  lineHeight: '30px',
};

const App: React.FC = () => (
  <>
    <Row>
      <Col style={colStyle} span={8}>
        col-8
      </Col>
      <Col style={colStyle} span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col style={colStyle} span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col style={colStyle} span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col style={colStyle} span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </>
);

export default App;
