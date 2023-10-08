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
    <Col
      style={colStyle}
      xs={{ span: 5, offset: 1 }}
      lg={{ span: 6, offset: 2 }}
    >
      Col
    </Col>
    <Col
      style={colStyle}
      xs={{ span: 11, offset: 1 }}
      lg={{ span: 6, offset: 2 }}
    >
      Col
    </Col>
    <Col
      style={colStyle}
      xs={{ span: 5, offset: 1 }}
      lg={{ span: 6, offset: 2 }}
    >
      Col
    </Col>
  </Row>
);

export default App;
