import RuleForm, { RuleFormInstance } from '@metro/rule-form';
import * as React from 'react';

const Input: React.FC<React.ComponentProps<'input'>> = (props) => (
  <input {...props} value={props.value || ''} />
);

export default () => {
  const ref = React.useRef<RuleFormInstance>(null);
  React.useLayoutEffect(() => {
    setTimeout(() => {
      ref.current?.validate();
    });
  }, []);
  return (
    <div>
      <RuleForm
        ref={ref}
        initialValue={{
          relation: 'and',
          conditions: [
            {
              type: 'string',
              name: 'fullname',
              operator: 'equals',
            },
            {
              type: 'string',
              name: 'age',
              operator: 'notEquals',
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
          {
            type: 'string',
            name: 'fullname',
            title: '名称',
            validator: [{ required: true, message: '名称不能为空' }],
          },
          {
            type: 'number',
            name: 'age',
            title: '年龄',
            validator: [{ required: true, message: '年龄不能为空' }],
          },
        ]}
        widgets={{
          string: Input,
          number: [Input, { type: 'number' }],
        }}
        onChange={(value) => console.log('validator onChange', value)}
      />
      <br />
      <button onClick={() => ref.current?.validate()}>提交</button>
    </div>
  );
};
