---
nav:
  title: 业务组件
  order: 5
title: RuleForm（条件表单）
toc: content
---

# RuleForm（条件表单）

RuleForm 是一个基于 React 和 formily 开发的规则配置表单，通常用于构建和管理基于规则的系统，可以根据具体的应用场景定制、扩展，例如自定义规则属性 、条件和主题样式等。

## 引入方式

```bash
$ yarn add @metro/rule-form
```

## 基础用法

<code src="./demos/basic.tsx"></code>

## 递归嵌套的表单

<code src="./demos/max-depth.tsx"></code>

## 校验规则

<code src="./demos/validator.tsx"></code>

## 在 MDS 中使用

<code src="./demos/customize.tsx"></code>

<code src="./demos/metro.tsx"></code>

<code src="./demos/formily.tsx" debug>在 formily 中使用</code>

## API

| 属性名       | 描述                       | 类型                                                           | 默认值                               |
| ------------ | -------------------------- | -------------------------------------------------------------- | ------------------------------------ |
| prefixCls    | 组件样式名前缀             | `string`                                                       | `rf`                                 |
| types        | 规则集合                   | `Option[]`                                                     | -                                    |
| disabled     | 禁用选项                   | `boolean`                                                      | -                                    |
| operators    | 操作集合                   | `Option[]`                                                     | -                                    |
| mapper       | 类型操作映射               | `Record<string, string[]>`                                     | -                                    |
| fields       | 字段集合                   | `RuleField[]`                                                  | -                                    |
| scope        | 局部作用域上下文           | `any`                                                          | -                                    |
| component    | 自定义输入组件集合         | `Record<string, JSXComponent>`                                 | -                                    |
| widgets      | 自定义输入组件类型映射集合 | `Record<string, Record<string, RuleWidget>>`                   | -                                    |
| customize    | 自定义样式布局             | `Record<'rule' \| 'condition', Record<string, CustomizeType>>` | -                                    |
| maxDepth     | 最大嵌套深度               | `number`                                                       | -                                    |
| value        | 表单值                     | `RuleValue`                                                    | -                                    |
| initialValue | 表单初始值                 | `RuleValue`                                                    | -                                    |
| defaultValue | 表单字段默认值             | `RuleValue`                                                    | `{ relation: 'and', condtions: [] }` |
| onChange     | 表单变化时触发             | `(value: RuleValue) => void`                                   | -                                    |

### RuleFormInstance

| 属性名     | 描述           | 类型         |
| ---------- | -------------- | ------------ |
| value      | 表单值         | `RuleValue`  |
| validating | 表单校验中     | `boolean`    |
| modified   | 表单是否有修改 | `boolean`    |
| submit     | 提交表单       | `() => void` |
| reset      | 重置表单       | `() => void` |
| validate   | 验证表单       | `() => void` |

### RuleField

| 属性名       | 描述                   | 类型                                         | 默认值 |
| ------------ | ---------------------- | -------------------------------------------- | ------ |
| type         | 字段类型               | `string`                                     | -      |
| name         | 字段名                 | `string`                                     | -      |
| title        | 字段显示名称           | `string`                                     | -      |
| initialValue | 初始值                 | `any`                                        | -      |
| options      | 枚举选项               | `Option[]`                                   | -      |
| disabled     | 禁用字段               | `boolean`                                    | -      |
| include      | 包含操作集合           | `string[]`                                   | -      |
| exclude      | 排除操作集合           | `string[]`                                   | -      |
| widgets      | 自定义输入组件映射集合 | `Record<string, RuleWidget>`                 | -      |
| validator    | 自定义字段校验规则     | `Validator[] \| Record<string, Validator[]>` | -      |

### RuleValue

| 属性名     | 描述     | 类型                                |
| ---------- | -------- | ----------------------------------- |
| relation   | 条件关系 | `RuleRelation`                      |
| conditions | 条件集合 | `Array<RuleValue \| RuleCondition>` |

### RuleRelation

```js
 type RuleRelation = `${Relation}` | (string & {});
```

### RuleCondition

| 属性名   | 描述     | 类型     |
| -------- | -------- | -------- |
| type     | 字段类型 | `string` |
| name     | 字段名   | `string` |
| operator | 条件操作 | `string` |
| value    | 条件值   | `any`    |

### RuleWidget<T = string | JSX.Element | JSXComponent>

```tsx | pure
T | [T, React.ComponentProps<any>] | null;
```

### Option<T = string>

| 属性名   | 描述         | 类型              | 默认值 |
| -------- | ------------ | ----------------- | ------ |
| value    | 选项值       | `T`               | -      |
| label    | 选项显示标签 | `React.ReactNode` | -      |
| disabled | 禁用选项     | `boolean`         | -      |

### JSXComponent

```tsx | pure
keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
```

### CustomizeType

```tsx | pure
((...args: any[]) => React.ReactNode) | React.ReactNode | JSXComponent;
```
