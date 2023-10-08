import { Button, Form, Input, Space } from '@metro/components';
import Add from '@metro/icons/dist/esm/react/Add';
import Minus from '@metro/icons/dist/esm/react/Minus';
import React from 'react';

const onFinish = (values: any) => {
  console.log('Received values of form:', values);
};

const App: React.FC = () => (
  <Form
    name="dynamic_form_no_style"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    autoComplete="off"
  >
    <Form.Item label="Users">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} style={{ marginBottom: 16 }}>
                <Form.Item
                  noStyle
                  name={[field.name, 'lastName']}
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                  noStyle
                  name={[field.name, 'firstName']}
                  rules={[{ required: true }]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <Minus
                  onClick={() => {
                    remove(field.name);
                  }}
                />
              </Space>
            ))}
            <Form.Item>
              <Button onClick={() => add()} block icon={<Add />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;
