import type { CheckboxValueType } from '@metro/components';
import { Checkbox, Divider } from '@metro/components';
import React from 'react';

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues);
};

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

const App: React.FC = () => (
  <>
    <Divider>Horzontal</Divider>
    <Checkbox.Group
      options={plainOptions}
      defaultValue={['Apple']}
      onChange={onChange}
    />
    <br />
    <br />
    <Checkbox.Group
      options={options}
      defaultValue={['Pear']}
      onChange={onChange}
    />
    <br />
    <br />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
    <Divider>Vertical</Divider>
    <Checkbox.Group
      options={plainOptions}
      defaultValue={['Apple']}
      onChange={onChange}
      direction="vertical"
    />
  </>
);

export default App;
