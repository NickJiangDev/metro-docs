import { Button, Col, Form, Input, Row, Select } from '@metro/components';
import ChevronDown from '@metro/icons/dist/esm/react/ChevronDown';
import ChevronUp from '@metro/icons/dist/esm/react/ChevronUp';
import React, { useState } from 'react';

const { Option } = Select;

const AdvancedSearchForm = () => {
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);

  const formStyle = {
    maxWidth: 'none',
    background: 'var(--metro-fill-1)',
    padding: 24,
  };

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={`Field ${i}`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            {i % 3 !== 1 ? (
              <Input placeholder="placeholder" />
            ) : (
              <Select defaultValue="2">
                <Option value="1">1</Option>
                <Option value="2">
                  longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong
                </Option>
              </Select>
            )}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      style={formStyle}
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <Button.Link
            icon={expand ? <ChevronUp /> : <ChevronDown />}
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            Collaspe
          </Button.Link>
        </Col>
      </Row>
    </Form>
  );
};

const App: React.FC = () => {
  const listStyle: React.CSSProperties = {
    lineHeight: '200px',
    textAlign: 'center',
    background: 'var(--metro-fill-1)',
    marginTop: 16,
  };

  return (
    <div>
      <AdvancedSearchForm />
      <div style={listStyle}>Search Result List</div>
    </div>
  );
};

export default App;
