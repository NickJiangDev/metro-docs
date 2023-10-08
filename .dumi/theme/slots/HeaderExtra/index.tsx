import { Select } from '@metro/components';
import React from 'react';
//@ts-ignore
import packageJson from '../../../../package.json';

const version = packageJson.dependencies['@metro/components'].replace('^', '');

const App: React.FC = () => {
  return (
    <Select
      value={version}
      options={[{ value: version, key: 'currentVersion' }]}
      size="small"
      width={140}
      style={{ marginLeft: 20 }}
    />
  );
};

export default App;
