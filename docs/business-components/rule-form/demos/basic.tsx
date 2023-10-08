import RuleForm from '@metro/rule-form';
import * as React from 'react';

const Input: React.FC<React.ComponentProps<'input'>> = (props) => {
  return <input {...props} value={props.value || ''} />;
};

export default () => {
  return (
    <RuleForm
      initialValue={{
        relation: 'and',
        conditions: [
          {
            type: 'string',
            name: 'fullname',
            operator: 'equals',
          },
          {
            type: 'number',
            name: 'age',
            operator: 'notEquals',
            value: 18,
          },
        ],
      }}
      types={[
        { value: 'string', label: '字符类型' },
        { value: 'number', label: '数值类型' },
      ]}
      operators={[
        { value: 'equals', label: '等于' },
        { value: 'notEquals', label: '不等于' },
      ]}
      mapper={{
        string: ['equals', 'notEquals'],
        number: ['equals', 'notEquals'],
      }}
      fields={[
        { type: 'string', name: 'fullname', title: '名称' },
        { type: 'number', name: 'age', title: '年龄' },
      ]}
      widgets={{
        string: Input,
        number: [Input, { type: 'number' }],
      }}
      maxDepth={1}
      onChange={(value) => {
        console.log('basic onChange', value);
      }}
    />
  );
};
