import RuleForm from '@metro/rule-form';
import * as React from 'react';

export default () => {
  return (
    <RuleForm
      types={[{ value: 'string', label: '字符类型' }]}
      operators={[
        { value: 'equals', label: '等于' },
        { value: 'notEquals', label: '不等于' },
      ]}
      mapper={{
        string: ['equals', 'notEquals'],
      }}
      fields={[{ type: 'string', name: 'fullname', title: '名称' }]}
      widgets={{
        string: (props: React.ComponentProps<'input'>) => (
          <input {...props} value={props.value || ''} />
        ),
      }}
      onChange={(value) => console.log('widget onChange', value)}
    />
  );
};
