import type { CarouselProps, RadioChangeEvent } from '@metro/components';
import { Carousel, Radio } from '@metro/components';
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
  const [arrowType, setArrowType] =
    useState<CarouselProps['arrowsType']>('always');

  const handleType = ({ target: { value } }: RadioChangeEvent) => {
    setArrowType(value);
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Radio.Group
        onChange={handleType}
        value={arrowType}
        optionType="button"
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="always">always</Radio.Button>
        <Radio.Button value="hover">hover</Radio.Button>
      </Radio.Group>
      <br />
      <Carousel afterChange={onChange} arrows={true} arrowsType={arrowType}>
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
