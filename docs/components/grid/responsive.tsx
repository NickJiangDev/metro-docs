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
  <Row>
    <Col style={colStyle} xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
    <Col style={colStyle} xs={20} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col style={colStyle} xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>
);

export default App;
