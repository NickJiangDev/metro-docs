import { Carousel } from '@metro/components';
import React from 'react';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: 'var(--metro-text-static-0)',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'var(--metro-primary-default)',
};

const App: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default App;
