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
    <Divider orientation="left">Normal</Divider>
    <Row>
      <Col style={colStyle} span={6} order={4}>
        1 col-order-4
      </Col>
      <Col style={colStyle} span={6} order={3}>
        2 col-order-3
      </Col>
      <Col style={colStyle} span={6} order={2}>
        3 col-order-2
      </Col>
      <Col style={colStyle} span={6} order={1}>
        4 col-order-1
      </Col>
    </Row>
    <Divider orientation="left">Responsive</Divider>
    <Row>
      <Col
        style={colStyle}
        span={6}
        xs={{ order: 1 }}
        sm={{ order: 2 }}
        md={{ order: 3 }}
        lg={{ order: 4 }}
      >
        1 col-order-responsive
      </Col>
      <Col
        style={colStyle}
        span={6}
        xs={{ order: 2 }}
        sm={{ order: 1 }}
        md={{ order: 4 }}
        lg={{ order: 3 }}
      >
        2 col-order-responsive
      </Col>
      <Col
        style={colStyle}
        span={6}
        xs={{ order: 3 }}
        sm={{ order: 4 }}
        md={{ order: 2 }}
        lg={{ order: 1 }}
      >
        3 col-order-responsive
      </Col>
      <Col
        style={colStyle}
        span={6}
        xs={{ order: 4 }}
        sm={{ order: 3 }}
        md={{ order: 1 }}
        lg={{ order: 2 }}
      >
        4 col-order-responsive
      </Col>
    </Row>
  </>
);

export default App;
