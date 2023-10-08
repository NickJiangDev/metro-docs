import { Progress } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <Progress percent={30} title="只有标题没有信息" showInfo={false} />
    <br />
    <br />
    <Progress percent={50} title="标题和信息" />
    <br />
    <br />
    <Progress
      percent={50}
      title="信息并排和标题展示"
      infoDirection="vertical"
    />
    <br />
    <br />
    <Progress percent={50} infoDirection="vertical" />
  </>
);

export default App;
