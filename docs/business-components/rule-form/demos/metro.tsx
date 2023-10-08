import {
  Button,
  Card,
  Empty,
  Form,
  Input,
  Space,
  Toggle,
} from '@metro/components';
import {
  Add,
  ChevronDown,
  ChevronUp,
  Delete,
} from '@metro/icons/dist/esm/react';
import { RuleFormInstance } from '@metro/rule-form';
import * as React from 'react';
import { Customize, initialValue } from './customize';

export default () => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = React.useState(false);
  return (
    <>
      <Form.Item label="禁用">
        <Toggle checked={disabled} onChange={setDisabled} />
      </Form.Item>
      <Form form={form} initialValues={{ rules: [{ rule: initialValue }] }}>
        <Form.List name="rules">
          {(fields, operation) => {
            return (
              <Space direction="vertical" style={{ width: '100%' }}>
                {fields.length ? (
                  fields.map((field, index) => {
                    const ref = React.createRef<RuleFormInstance>();
                    return (
                      <Card
                        title={`#${index + 1}.规则`}
                        key={field.key}
                        extra={
                          <Space>
                            <a onClick={() => operation.remove(index)}>
                              <Delete />
                            </a>
                            <a
                              onClick={() =>
                                operation.move(
                                  index,
                                  index === 0 ? fields.length - 1 : index - 1,
                                )
                              }
                            >
                              <ChevronUp />
                            </a>
                            <a
                              onClick={() =>
                                operation.move(
                                  index,
                                  index === fields.length - 1 ? 0 : index + 1,
                                )
                              }
                            >
                              <ChevronDown />
                            </a>
                          </Space>
                        }
                      >
                        <Form.Item
                          name={[field.name, 'title']}
                          label="规则名称"
                          rules={[{ required: true }]}
                        >
                          <Input disabled={disabled} />
                        </Form.Item>
                        <Form.Item
                          name={[field.name, 'rule']}
                          label="规则配置"
                          rules={[
                            { required: true },
                            {
                              async validator() {
                                try {
                                  await ref.current?.validate();
                                } catch {
                                  return Promise.reject('');
                                }
                              },
                            },
                          ]}
                        >
                          <Customize ref={ref} disabled={disabled} />
                        </Form.Item>
                      </Card>
                    );
                  })
                ) : (
                  <Card title="规则">
                    <Empty />
                  </Card>
                )}
                <Button
                  icon={<Add />}
                  onClick={() => operation.add()}
                  block
                  disabled={disabled}
                >
                  添加条目
                </Button>
                <Space>
                  <Button
                    type="primary"
                    onClick={async () => {
                      const values = await form.validateFields();
                      const value = await form.getFieldsValue();
                      console.log('onSubmit', values, value);
                    }}
                    disabled={disabled}
                  >
                    提交
                  </Button>
                  <Button
                    onClick={() => form.resetFields()}
                    disabled={disabled}
                  >
                    重置
                  </Button>
                </Space>
              </Space>
            );
          }}
        </Form.List>
      </Form>
    </>
  );
};
