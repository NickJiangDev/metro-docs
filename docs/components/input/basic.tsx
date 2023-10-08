import { Input } from '@metro/components';
import Search from '@metro/icons/dist/esm/react/Search';
import React from 'react';

const App: React.FC = () => <Input placeholder="搜索" prefix={<Search />} />;

export default App;
