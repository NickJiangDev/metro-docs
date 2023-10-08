import {
  Button,
  Col,
  DatePicker,
  Divider,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from '@metro/components';
import {
  Add,
  Copy,
  Delete,
  InfoCircleOutlined,
} from '@metro/icons/dist/esm/react';
import RuleForm, {
  RuleFormCustomize,
  RuleFormInstance,
  RuleFormProps,
  useRule,
} from '@metro/rule-form';
import classnames from 'classnames';
import * as React from 'react';
import './customize.less';

const customize: RuleFormCustomize = {
  rule: {
    wrapper: ({ className, children }) => {
      return <div className={className}>{children}</div>;
    },
    relation: ({ className, options, value, onChange, disabled }) => {
      const rule = useRule();
      const conditions = rule.value.conditions;
      if (!conditions?.length) return null;
      return (
        <div className={className}>
          {conditions?.length > 1 && (
            <Space direction="vertical">
              {options.map((option) => (
                <Button
                  key={option.value}
                  type={option.value === value ? 'primary' : undefined}
                  size="small"
                  disabled={disabled || option.disabled}
                  onClick={() => onChange(option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </Space>
          )}
        </div>
      );
    },
    list: ({ className, children }) => {
      const rule = useRule();
      const conditions = rule.value.conditions;
      if (!conditions.length) return null;
      return (
        <div className={className}>
          <Row>{children}</Row>
        </div>
      );
    },
    actions: ({ className, add, displayAddRule, disabled }) => {
      return (
        <div className={className}>
          <Space size={0} split={<Divider type="vertical" />}>
            <Button.Link
              icon={<Add />}
              iconDirection="left"
              onClick={add.condition}
              disabled={disabled}
            >
              添加条件
            </Button.Link>

            {displayAddRule && (
              <Button.Link onClick={add.rule} disabled={disabled}>
                添加规则
              </Button.Link>
            )}
          </Space>
        </div>
      );
    },
  },
  condition: {
    wrapper: ({ className, dom, disabled }) => {
      return (
        <Col
          className={classnames(className, {
            [`${className}-disabled`]: disabled,
          })}
          span={24}
        >
          <Space size={6}>
            {dom.fieldName}
            {dom.operator}
            {dom.value}
            {dom.feedback}
            {dom.actions}
          </Space>
        </Col>
      );
    },
    fieldName: (props) => <Select {...props} style={{ minWidth: 120 }} />,
    operator: (props) => <Select {...props} style={{ minWidth: 120 }} />,
    feedback: ({ messages }) => {
      if (!messages.length) return null;
      return (
        <Button.Link
          icon={<InfoCircleOutlined />}
          danger
          showTooltip
          tooltipTitle={messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
          tooltipProps={{ defaultOpen: true }}
        />
      );
    },
    actions: ({ className, copy, remove }) => {
      return (
        <Space className={className}>
          <Button.Link
            icon={<Copy />}
            onClick={copy}
            showTooltip
            tooltipTitle="拷贝"
          />
          <Button.Link
            icon={<Delete />}
            onClick={remove}
            showTooltip
            tooltipTitle="移除"
          />
        </Space>
      );
    },
  },
};

const InputNumberBetween: React.FC<{
  value: number[];
  onChange: (value: number[]) => void;
}> = (props) => {
  const { value, onChange, ...rest } = props;
  const [min, max] = Array.isArray(value) ? value : [];
  return (
    <Space>
      <InputNumber
        {...rest}
        value={min}
        max={max}
        onChange={(changedValue) => onChange?.([changedValue!, max])}
      />
      <InputNumber
        {...rest}
        value={max}
        min={min}
        onChange={(changedValue) => onChange?.([min, changedValue!])}
      />
    </Space>
  );
};

const isValid = (value: unknown) => value !== undefined && value !== null;

export const Customize = React.forwardRef<RuleFormInstance, RuleFormProps>(
  (props, ref) => {
    const style = {
      '--bg-color': 'var(--metro-secondary-default)',
      '--error-bg-color': 'var(--metro-danger-light-0);',
      '--warning-bg-color': 'var(--metro-warning-light-0);',
      '--condition-line-color': 'var(--metro-divider-0)',
    } as React.CSSProperties;

    return (
      <div style={style}>
        <RuleForm
          {...props}
          ref={ref}
          prefixCls="customize"
          types={[
            { value: 'string', label: '字符类型' },
            { value: 'number', label: '数值类型' },
            { value: 'datetime', label: '日期类型' },
          ]}
          operators={[
            { value: 'equals', label: '等于' },
            { value: 'notEquals', label: '不等于' },
            { value: 'between', label: '区间' },
          ]}
          mapper={{
            string: ['equals', 'notEquals'],
            number: ['equals', 'notEquals', 'between'],
            datetime: ['equals', 'notEquals', 'between'],
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
              validator: {
                default: [{ required: true, message: '年龄不能为空' }],
                between: [
                  {
                    async validator(value, rule) {
                      return Array.isArray(value) &&
                        value.every((currentValue) => isValid(currentValue))
                        ? ''
                        : rule.message!;
                    },
                    message: '年龄区间不能为空',
                  },
                  {
                    min: 0,
                    max: 105,
                    async validator(value, rule) {
                      const [min, max] = value;

                      if (rule.min !== undefined && min < rule.min) {
                        return `请输入不小于${rule.min}的值`;
                      }

                      if (rule.max !== undefined && max > rule.max) {
                        return `请输入不大于${rule.max}的值`;
                      }

                      return '';
                    },
                  },
                ],
              },
            },
            {
              type: 'string',
              name: 'gender',
              title: '性别',
              initialValue: 'men',
              options: [
                { value: 'men', label: '男性' },
                { value: 'women', label: '女性' },
              ],
              validator: [{ required: true, message: '性别不能为空' }],
            },
            {
              type: 'number',
              name: 'maritalStatus',
              title: '婚姻状况',
              initialValue: 0,
              options: [
                { value: 0, label: '未婚' },
                { value: 1, label: '已婚' },
                { value: 2, label: '离异' },
              ],
              exclude: ['between'],
              validator: [{ required: true, message: '婚姻状况不能为空' }],
            },
            {
              type: 'datetime',
              name: 'birthday',
              title: '出生日期',
              validator: [{ required: true, message: '出生日期不能为空' }],
            },
          ]}
          components={{
            Input,
            InputNumber,
            Select,
            DatePicker,
          }}
          widgets={{
            string: '{{Array.isArray($self.dataSource) ? "Select" : "Input"}}',
            number: {
              default:
                '{{Array.isArray($self.dataSource) ? "Select" : "InputNumber"}}',
              between: InputNumberBetween,
            },
            datetime: {
              default: 'DatePicker',
              between: 'DatePicker.RangePicker',
            },
          }}
          customize={customize}
          onChange={(value) => {
            console.log('customize onChange', value);
          }}
        />
      </div>
    );
  },
);

export const initialValue = {
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
      operator: 'between',
      value: [18],
    },
    {
      type: 'string',
      name: 'gender',
      operator: 'equals',
      value: 'women',
    },
    {
      relation: 'or',
      conditions: [
        {
          type: 'datetime',
          name: 'birthday',
          operator: 'between',
        },
        {
          type: 'number',
          name: 'maritalStatus',
          operator: 'equals',
          value: 1,
        },
        {
          type: '',
          name: '',
          operator: '',
        },
      ],
    },
  ],
};

export default () => {
  const form = React.useRef<RuleFormInstance>(null);
  return (
    <Space direction="vertical">
      <Customize ref={form} initialValue={initialValue} />
      <Space>
        <Button
          type="primary"
          onClick={async () => {
            try {
              const values = await form.current?.submit();
              console.log('customize onSubmit', values);
            } catch {}
          }}
        >
          提交
        </Button>
        <Button onClick={() => form.current?.reset()}>重置</Button>
      </Space>
    </Space>
  );
};
