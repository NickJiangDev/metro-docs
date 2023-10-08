import {
  ArrayCards,
  Editable,
  FormButtonGroup,
  FormItem,
  Input,
  Reset,
  Space,
  Submit,
} from '@formily/antd';
import { createForm, onFormInputChange } from '@formily/core';
import { createSchemaField, FormProvider } from '@formily/react';
import { Customize, initialValue } from './customize';

const form = createForm({
  initialValues: { rules: [{ rule: initialValue }] },
  effects() {
    onFormInputChange(() => {
      console.log('formily onChange', form.values);
    });
  },
});

const SchemaField = createSchemaField({
  components: {
    Space,
    Editable,
    FormItem,
    Input,
    ArrayCards,
    Customize,
  },
});

export default () => {
  return (
    <FormProvider form={form}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <SchemaField
          schema={{
            type: 'object',
            properties: {
              rules: {
                type: 'array',
                'x-component': 'ArrayCards',
                'x-component-props': {
                  title: '规则',
                },
                items: {
                  type: 'object',
                  properties: {
                    index: {
                      type: 'void',
                      'x-component': 'ArrayCards.Index',
                    },
                    title: {
                      type: 'string',
                      title: '规则名称',
                      required: true,
                      'x-decorator': 'FormItem',
                      'x-component': 'Input',
                    },
                    rule: {
                      type: 'object',
                      title: '规则配置',
                      required: true,
                      'x-decorator': 'FormItem',
                      'x-component': 'Customize',
                    },
                    remove: {
                      type: 'void',
                      'x-component': 'ArrayCards.Remove',
                    },
                    moveUp: {
                      type: 'void',
                      'x-component': 'ArrayCards.MoveUp',
                    },
                    moveDown: {
                      type: 'void',
                      'x-component': 'ArrayCards.MoveDown',
                    },
                  },
                },
                properties: {
                  addition: {
                    type: 'void',
                    title: '添加条目',
                    'x-component': 'ArrayCards.Addition',
                  },
                },
              },
            },
          }}
        />
        <FormButtonGroup>
          <Space>
            <Submit
              type="default"
              onSubmit={async (values) => {
                console.log('formily onSubmit', values);
              }}
            >
              提交
            </Submit>
            <Reset type="default">重置</Reset>
          </Space>
        </FormButtonGroup>
      </Space>
    </FormProvider>
  );
};
