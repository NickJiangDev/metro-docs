import { Upload } from '@metro/components';
import Add from '@metro/icons/dist/esm/react/Add';
import React from 'react';

const App: React.FC = () => (
  <Upload icon={<Add />} tip="我要重新自定义上传" desc="支持的格式也不同了" />
);

export default App;
