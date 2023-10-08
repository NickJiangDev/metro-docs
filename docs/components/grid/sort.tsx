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
    <Col style={colStyle} span={18} push={6}>
      col-18 col-push-6
    </Col>
    <Col style={colStyle} span={6} pull={18}>
      col-6 col-pull-18
    </Col>
  </Row>
);

export default App;
