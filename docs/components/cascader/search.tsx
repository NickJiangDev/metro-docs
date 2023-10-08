import type { CascaderDefaultOptionType } from '@metro/components';
import { Cascader } from '@metro/components';
import React from 'react';

interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
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
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
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
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
];

const onChange = (value: string[], selectedOptions: Option[]) => {
  console.log(value, selectedOptions);
};

const filter = (inputValue: string, path: CascaderDefaultOptionType[]) =>
  path.some(
    (option) =>
      (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) >
      -1,
  );

const App: React.FC = () => (
  <Cascader
    options={options}
    placeholder="Please select"
    showSearch={{ filter }}
    onSearch={(value) => console.log(value)}
  />
);

export default App;
