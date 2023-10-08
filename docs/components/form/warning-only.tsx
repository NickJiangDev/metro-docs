import { Button, Form, Input, Space, toast } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    toast.success('Submit success!');
  };

  const onFinishFailed = () => {
    toast.error('Submit failed!');
  };

  const onFill = () => {
    form.setFieldsValue({
      url: 'https://baidu.com',
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="url"
        label="URL"
        rules={[
          { required: true },
          { type: 'url', warningOnly: true },
          { type: 'string', min: 6 },
        ]}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onFill}>
            Fill
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default App;
