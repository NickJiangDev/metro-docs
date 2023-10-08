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
    <Divider orientation="left">Percentage columns</Divider>
    <Row>
      <Col style={colStyle} flex={2}>
        2 / 5
      </Col>
      <Col style={colStyle} flex={3}>
        3 / 5
      </Col>
    </Row>
    <Divider orientation="left">Fill rest</Divider>
    <Row>
      <Col style={colStyle} flex="100px">
        100px
      </Col>
      <Col style={colStyle} flex="auto">
        Fill Rest
      </Col>
    </Row>
    <Divider orientation="left">Raw flex style</Divider>
    <Row>
      <Col style={colStyle} flex="1 1 200px">
        1 1 200px
      </Col>
      <Col style={colStyle} flex="0 1 300px">
        0 1 300px
      </Col>
    </Row>

    <Row wrap={false}>
      <Col style={colStyle} flex="none">
        <div style={{ padding: '0 16px' }}>none</div>
      </Col>
      <Col style={colStyle} flex="auto">
        auto with no-wrap
      </Col>
    </Row>
  </>
);

export default App;
