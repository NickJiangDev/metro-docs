import { Divider } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <p>啊。</p>
    <Divider>Text</Divider>
    <p>啊。</p>
    <Divider orientation="left">Left Text</Divider>
    <p>啊。</p>
    <Divider orientation="right">Right Text</Divider>
    <p>啊。</p>
    <Divider orientation="left" orientationMargin="0">
      Left Text with 0 orientationMargin
    </Divider>
    <p>啊。</p>
    <Divider orientation="right" orientationMargin={50}>
      Right Text with 50px orientationMargin
    </Divider>
    <p>啊。</p>
  </>
);

export default App;
