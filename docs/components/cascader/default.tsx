import { Cascader } from '@metro/components';
import React from 'react';

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const onChange = (value: (string | number)[]) => {
  console.log(value);
};

const App: React.FC = () => (
  <Cascader
    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
    options={options}
    onChange={onChange}
  />
);

export default App;
