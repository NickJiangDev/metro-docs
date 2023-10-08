import type { DotPosition, DotType, RadioChangeEvent } from '@metro/components';
import { Carousel, Radio, Toggle } from '@metro/components';
import React, { useState } from 'react';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: 'var(--metro-text-static-0)',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'var(--metro-primary-default)',
};

const App: React.FC = () => {
  const [dotPosition, setDotPosition] = useState<DotPosition>('top');

  const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
    setDotPosition(value);
  };

  const [dotType, setDotType] = useState<DotType>('line');

  const handleType = ({ target: { value } }: RadioChangeEvent) => {
    setDotType(value);
  };

  const [showDot, setShowDot] = useState(true);

  return (
    <>
      <Radio.Group
        onChange={handleType}
        value={dotType}
        optionType="button"
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="line">line</Radio.Button>
        <Radio.Button value="dot">dot</Radio.Button>
      </Radio.Group>
      <br />
      <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        optionType="button"
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <br />
      <Toggle
        checkedText="Show Dot"
        unCheckedText="Hide Dot"
        showText
        onChange={setShowDot}
        checked={showDot}
      />
      <Carousel dotPosition={dotPosition} dotType={dotType} dots={showDot}>
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
    </>
  );
};

export default App;
