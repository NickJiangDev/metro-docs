---
toc: content
title: Form（表单）
nav:
  title: 组件
group:
  title: 数据录入
---

# Form（表单）

高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。

## 何时使用

用于创建一个实体或收集信息。
需要对输入的数据类型进行校验时。

## 代码演示

<code src="./basic.tsx" description="基本的表单数据域控制展示，包含布局、初始化、验证、提交。">基础用法</code>
<code src="./control-hooks.tsx" description="通过 Form.useForm 对表单数据域进行交互。">表单方法调用</code>
<code src="./layout.tsx" description="表单有三种布局。">表单布局</code>
<code src="./disabled.tsx" description="设置表单组件禁用。">表单禁用</code>
<code src="./required-mark.tsx" description="通过 `requiredMark` 切换必选与可选样式。">必选样式</code>
<code src="./size.tsx" description="设置表单组件尺寸，仅对 MDS 组件有效。">表单尺寸</code>
<code src="./layout-can-wrap.tsx" description="使用 `labelWrap` 可以开启 `label` 换行。">表单标签可换行</code>
<code src="./warning-only.tsx" description="`rule` 添加 `warningOnly` 后校验不再阻塞表单提交。">非阻塞校验</code>
<code src="./useWatch.tsx" description="`useWatch` 允许你监听字段变化，同时仅当该字段变化时重新渲染。">字段监听 Hooks</code>
<code src="./form-item-path.tsx" description="在某些场景，你希望统一设置一些字段的前缀。你可以通过 HOC 实现该效果。">字段路径前缀</code>
<code src="./dynamic-form-item.tsx" description="动态增加、减少表单项。`add` 方法参数可用于设置初始值。">动态增减表单项</code>
<code src="./dynamic-form-items.tsx" description="嵌套表单字段需要对 `field` 进行拓展，将 `field.name` 应用于控制字段。">动态增减嵌套字段</code>
<code src="./dynamic-form-items-complex.tsx" description="这个例子演示了一个表单中包含多个表单控件的情况。">复杂的动态增减表单项</code>
<code src="./nest-messages.tsx" description="`name` 属性支持嵌套数据结构。通过 `validateMessages` 或 `message` 自定义校验信息模板。">嵌套结构与校验信息</code>
<code src="./complex-form-control.tsx" description="这里演示 Form.Item 内有多个元素的使用方式。只会对它的直接子元素绑定表单功能，例如直接包裹了 `Input/Select`。如果控件前后还有一些文案或样式装点，或者一个表单项内有多个控件，你可以使用内嵌的 `Form.Item` 完成。你可以给 `Form.Item` 自定义 `style` 进行内联布局，或者添加 `noStyle` 作为纯粹的无样式绑定组件。">复杂一点的控件</code>
<code src="./customized-form-controls.tsx" description="自定义或第三方的表单控件，也可以与 Form 组件一起使用。">自定义表单控件</code>
<code src="./global-state.tsx" description="通过 `onFieldsChange` 和 `fields`，可以把表单的数据存储到上层组件或者 `Redux`、`dva` 中。">表单数据存储于上层组件</code>
<code src="./form-context.tsx" description="通过 `Form.Provider` 在表单间处理数据。本例子中，Modal 的确认按钮在 Form 之外，通过 `form.submit` 方法调用表单提交功能。">多表单联动</code>
<code src="./inline-login.tsx" description="内联登录栏，常用在顶部导航栏中。">内联登录栏</code>
<code src="./normal-login.tsx" description="普通的登录框，可以容纳更多的元素。">登录框</code>
<code src="./register.tsx" description="用户填写必须的信息以注册新用户。">注册新用户</code>
<code src="./advanced-search.tsx" description="三列栅格式的表单排列方式，常用于数据表格的高级搜索。有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。">高级搜索</code>
<code src="./form-in-modal.tsx" description="当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 Modal 弹出一个表单，用户填写必要信息后创建新的项。">弹出层中的新建表单</code>
<code src="./without-form-create.tsx" description="`Form`具有自动收集数据并校验的功能，但如果您不需要这个功能，或者默认的行为无法满足业务需求，可以选择自行处理数据。">自行处理表单数据</code>
<code src="./validate-static.tsx" description="我们提供了 `validateStatus` `help` `hasFeedback` 等属性，你可以不通过 `Form` 自己定义校验的时机和内容。">自定义校验</code>
<code src="./dynamic-rule.tsx" description="根据不同情况执行不同的校验规则。">动态校验规则</code>
<code src="./validate-other.tsx" description="以上演示没有出现的表单控件对应的校验演示。">校验其他组件</code>

## API

### Form

| 参数               | 说明                                                                                                                | 类型                                                                                                                              | 默认值       | 版本 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---- |
| colon              | 配置 Form.Item 的 `colon` 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)          | boolean                                                                                                                           | true         |      |
| disabled           | 设置表单组件禁用，仅对 MDS 组件有效                                                                                 | boolean                                                                                                                           | false        |      |
| component          | 设置 Form 渲染元素，为 `false` 则不创建 DOM 节点                                                                    | ComponentType \| false                                                                                                            | form         |      |
| fields             | 通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。查看[示例](#components-form-demo-global-state)          | [FieldData](#fielddata)\[]                                                                                                        | -            |      |
| form               | 经 `Form.useForm()` 创建的 form 控制实例，不提供时会自动创建                                                        | [FormInstance](#forminstance)                                                                                                     | -            |      |
| initialValues      | 表单默认值，只有初始化以及重置时生效                                                                                | object                                                                                                                            | -            |      |
| labelAlign         | label 标签的文本对齐方式                                                                                            | `left` \| `right`                                                                                                                 | `right`      |      |
| labelWrap          | label 标签的文本换行方式                                                                                            | boolean                                                                                                                           | false        |      |
| labelCol           | label 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | [object](/components/grid-cn#col)                                                                                                 | -            |      |
| layout             | 表单布局                                                                                                            | `horizontal` \| `vertical` \| `inline`                                                                                            | `horizontal` |      |
| name               | 表单名称，会作为表单字段 `id` 前缀使用                                                                              | string                                                                                                                            | -            |      |
| preserve           | 当字段被删除时保留字段值                                                                                            | boolean                                                                                                                           | true         |      |
| requiredMark       | 必选样式，可以切换为必选或者可选展示样式。此为 Form 配置，Form.Item 无法单独配置                                    | boolean \| `optional`                                                                                                             | true         |      |
| scrollToFirstError | 提交失败自动滚动到第一个错误字段                                                                                    | boolean \| [Options](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options) | false        |      |
| size               | 设置字段组件的尺寸（仅限 MDS 组件）                                                                                 | `small` \| `middle` \| `large`                                                                                                    | -            |      |
| validateMessages   | 验证提示模板，说明[见下](#validatemessages)                                                                         |                                                                                                                                   | -            |      |
| validateTrigger    | 统一设置字段触发验证的时机                                                                                          | string \| string\[]                                                                                                               | `onChange`   |      |
| wrapperCol         | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol                                                           | [object](/components/grid-cn#col)                                                                                                 | -            |      |
| onFieldsChange     | 字段更新时触发回调事件                                                                                              | function(changedFields, allFields)                                                                                                | -            |      |
| onFinish           | 提交表单且数据验证成功后回调事件                                                                                    | function(values)                                                                                                                  | -            |      |
| onFinishFailed     | 提交表单且数据验证失败后回调事件                                                                                    | function({ values, errorFields, outOfDate })                                                                                      | -            |      |
| onValuesChange     | 字段值更新时触发回调事件                                                                                            | function(changedValues, allValues)                                                                                                | -            |      |

### validateMessages

Form 为验证提供了默认的错误提示信息，你可以通过配置 `validateMessages` 属性，修改对应的提示模板。一种常见的使用方式，是配置国际化提示信息：

```js
const validateMessages = {
  required: "'${name}' 是必选字段",
  // ...
};

<Form validateMessages={validateMessages} />;
```

## Form.Item

表单字段组件，用于数据双向绑定、校验、布局等。

| 参数              | 说明                                                                                                                                                                                                                       | 类型                                                                              | 默认值     | 版本 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------- | ---- |
| colon             | 配合 `label` 属性使用，表示是否显示 `label` 后面的冒号                                                                                                                                                                     | boolean                                                                           | true       |      |
| dependencies      | 设置依赖字段，说明[见下](#dependencies)                                                                                                                                                                                    | [NamePath](#namepath)\[]                                                          | -          |      |
| extra             | 额外的提示信息，和 `help` 类似，当需要错误信息和提示文案同时出现时，可以使用这个。                                                                                                                                         | ReactNode                                                                         | -          |      |
| getValueFromEvent | 设置如何将 event 的值转换成字段值                                                                                                                                                                                          | (..args: any\[]) => any                                                           | -          |      |
| getValueProps     | 为子元素添加额外的属性                                                                                                                                                                                                     | (value: any) => any                                                               | -          |      |
| hasFeedback       | 配合 `validateStatus` 属性使用，展示校验状态图标，建议只配合 Input 组件使用                                                                                                                                                | boolean                                                                           | false      |      |
| help              | 提示信息，如不设置，则会根据校验规则自动生成                                                                                                                                                                               | ReactNode                                                                         | -          |      |
| hidden            | 是否隐藏字段（依然会收集和校验字段）                                                                                                                                                                                       | boolean                                                                           | false      |      |
| htmlFor           | 设置子元素 label `htmlFor` 属性                                                                                                                                                                                            | string                                                                            | -          |      |
| initialValue      | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准                                                                                                                                                        | string                                                                            | -          |      |
| label             | `label` 标签的文本                                                                                                                                                                                                         | ReactNode                                                                         | -          |      |
| labelAlign        | 标签文本对齐方式                                                                                                                                                                                                           | `left` \| `right`                                                                 | `right`    |      |
| labelCol          | `label` 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}`。你可以通过 Form 的 `labelCol` 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准 |                                                                                   | -          |      |
| messageVariables  | 默认验证字段的信息                                                                                                                                                                                                         | Record&lt;string, string>                                                         | -          |      |
| name              | 字段名，支持数组                                                                                                                                                                                                           | [NamePath](#namepath)                                                             | -          |      |
| normalize         | 组件获取值后进行转换，再放入 Form 中。不支持异步                                                                                                                                                                           | (value, prevValue, prevValues) => any                                             | -          |      |
| noStyle           | 为 `true` 时不带样式，作为纯字段控件使用                                                                                                                                                                                   | boolean                                                                           | false      |      |
| preserve          | 当字段被删除时保留字段值                                                                                                                                                                                                   | boolean                                                                           | true       |      |
| required          | 必填样式设置。如不设置，则会根据校验规则自动生成                                                                                                                                                                           | boolean                                                                           | false      |      |
| rules             | 校验规则，设置字段的校验逻辑。点击[此处](#docs-components-form-demo-basic)查看示例                                                                                                                                         | [Rule](#rule)\[]                                                                  | -          |      |
| shouldUpdate      | 自定义字段更新逻辑，说明[见下](#shouldupdate)                                                                                                                                                                              | boolean \| (prevValue, curValue) => boolean                                       | false      |      |
| tooltip           | 配置提示信息                                                                                                                                                                                                               | ReactNode \| [TooltipProps & { icon: ReactNode }](/components/tooltip#共同的-api) | -          |      |
| trigger           | 设置收集字段值变更的时机。点击[此处](#docs-components-form-demo-customized-form-controls)查看示例                                                                                                                          | string                                                                            | `onChange` |      |
| validateFirst     | 当某一规则校验不通过时，是否停止剩下的规则的校验。设置 `parallel` 时会并行校验                                                                                                                                             | boolean \| `parallel`                                                             | false      |      |
| validateStatus    | 校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'                                                                                                                               | string                                                                            | -          |      |
| validateTrigger   | 设置字段校验的时机                                                                                                                                                                                                         | string \| string\[]                                                               | `onChange` |      |
| valuePropName     | 子节点的值的属性，如 Switch 的是 'checked'。该属性为 `getValueProps` 的封装，自定义 `getValueProps` 后会失效                                                                                                               | string                                                                            | `value`    |      |
| wrapperCol        | 需要为输入控件设置布局样式时，使用该属性，用法同 `labelCol`。你可以通过 Form 的 `wrapperCol` 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准                                                         |                                                                                   | -          |      |

被设置了 `name` 属性的 `Form.Item` 包装的控件，表单控件会自动添加 `value`（或 `valuePropName` 指定的其他属性） `onChange`（或 `trigger` 指定的其他属性），数据同步将被 Form 接管，这会导致以下结果：

1. 你**不再需要也不应该**用 `onChange` 来做数据收集同步（你可以使用 Form 的 `onValuesChange`），但还是可以继续监听 `onChange` 事件。
2. 你不能用控件的 `value` 或 `defaultValue` 等属性来设置表单域的值，默认值可以用 Form 里的 `initialValues` 来设置。注意 `initialValues` 不能被 `setState` 动态更新，你需要用 `setFieldsValue` 来更新。
3. 你不应该用 `setState`，可以使用 `form.setFieldsValue` 来动态改变表单值。

### dependencies

当字段间存在依赖关系时使用。如果一个字段设置了 `dependencies` 属性。那么它所依赖的字段更新时，该字段将自动触发更新与校验。一种常见的场景，就是注册用户表单的“密码”与“确认密码”字段。“确认密码”校验依赖于“密码”字段，设置 `dependencies` 后，“密码”字段更新会重新触发“校验密码”的校验逻辑。你可以参考[具体例子](#docs-components-form-demo-register)。

`dependencies` 不应和 `shouldUpdate` 一起使用，因为这可能带来更新逻辑的混乱。

### shouldUpdate

Form 通过增量更新方式，只更新被修改的字段相关组件以达到性能优化目的。大部分场景下，你只需要编写代码或者与 [`dependencies`](#dependencies) 属性配合校验即可。而在某些特定场景，例如修改某个字段值后出现新的字段选项、或者纯粹希望表单任意变化都对某一个区域进行渲染。你可以通过 `shouldUpdate` 修改 Form.Item 的更新逻辑。

当 `shouldUpdate` 为 `true` 时，Form 的任意变化都会使该 Form.Item 重新渲染。这对于自定义渲染一些区域十分有帮助：

```js
<Form.Item shouldUpdate>
  {() => {
    return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
  }}
</Form.Item>
```

当 `shouldUpdate` 为方法时，表单的每次数值更新都会调用该方法，提供原先的值与当前的值以供你比较是否需要更新。这对于是否根据值来渲染额外字段十分有帮助：

```js
<Form.Item
  shouldUpdate={(prevValues, curValues) =>
    prevValues.additional !== curValues.additional
  }
>
  {() => {
    return (
      <Form.Item name="other">
        <Input />
      </Form.Item>
    );
  }}
</Form.Item>
```

你可以参考[示例](#docs-components-form-demo-control-hooks)查看具体使用场景。

### messageVariables

你可以通过 `messageVariables` 修改 Form.Item 的默认验证信息。

```js
<Form>
  <Form.Item messageVariables={{ another: 'good' }} label="user">
    <Input />
  </Form.Item>
  <Form.Item messageVariables={{ label: 'good' }} label={<span>user</span>}>
    <Input />
  </Form.Item>
</Form>
```

## Form.List

为字段提供数组化管理。

| 参数         | 说明                                                                        | 类型                                                                                      | 默认值 | 版本 |
| ------------ | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------ | ---- |
| children     | 渲染函数                                                                    | (fields: Field\[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode | -      |      |
| initialValue | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准         | any\[]                                                                                    | -      |      |
| name         | 字段名，支持数组                                                            | [NamePath](#namepath)                                                                     | -      |      |
| rules        | 校验规则，仅支持自定义规则。需要配合 [ErrorList](#formerrorlist) 一同使用。 | { validator, message }\[]                                                                 | -      |      |

```js
<Form.List>
  {(fields) =>
    fields.map((field) => (
      <Form.Item {...field}>
        <Input />
      </Form.Item>
    ))
  }
</Form.List>
```

注意：Form.List 下的字段不应该配置 `initialValue`，你始终应该通过 Form.List 的 `initialValue` 或者 Form 的 `initialValues` 来配置。

## operation

Form.List 渲染表单相关操作函数。

| 参数   | 说明       | 类型                                               | 默认值      | 版本 |
| ------ | ---------- | -------------------------------------------------- | ----------- | ---- |
| add    | 新增表单项 | (defaultValue?: any, insertIndex?: number) => void | insertIndex |      |
| move   | 移动表单项 | (from: number, to: number) => void                 | -           |      |
| remove | 删除表单项 | (index: number \| number\[]) => void               | number\[]   |      |

## Form.ErrorList

| 参数   | 说明     | 类型         | 默认值 |
| ------ | -------- | ------------ | ------ |
| errors | 错误列表 | ReactNode\[] | -      |

## Form.Provider

提供表单间联动功能，其下设置 `name` 的 Form 更新时，会自动触发对应事件。查看[示例](#docs-components-form-demo-form-context)。

| 参数         | 说明                 | 类型                                                       | 默认值 |
| ------------ | -------------------- | ---------------------------------------------------------- | ------ |
| onFormChange | 子表单字段更新时触发 | function(formName: string, info: { changedFields, forms }) | -      |
| onFormFinish | 子表单提交时触发     | function(formName: string, info: { values, forms })        | -      |

```js
<Form.Provider
  onFormFinish={(name) => {
    if (name === 'form1') {
      // Do something...
    }
  }}
>
  <Form name="form1">...</Form>
  <Form name="form2">...</Form>
</Form.Provider>
```

### FormInstance

| 名称              | 说明                                                                                                                                                       | 类型                                                                                                                                                                         | 版本 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| getFieldError     | 获取对应字段名的错误信息                                                                                                                                   | (name: [NamePath](#namepath)) => string\[]                                                                                                                                   |      |
| getFieldInstance  | 获取对应字段实例                                                                                                                                           | (name: [NamePath](#namepath)) => any                                                                                                                                         |      |
| getFieldsError    | 获取一组字段名对应的错误信息，返回为数组形式                                                                                                               | (nameList?: [NamePath](#namepath)\[]) => FieldError\[]                                                                                                                       |      |
| getFieldsValue    | 获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 `getFieldsValue(true)` 时返回所有值                                                 | (nameList?: [NamePath](#namepath)\[], filterFunc?: (meta: { touched: boolean, validating: boolean }) => boolean) => any                                                      |      |
| getFieldValue     | 获取对应字段名的值                                                                                                                                         | (name: [NamePath](#namepath)) => any                                                                                                                                         |      |
| isFieldsTouched   | 检查一组字段是否被用户操作过，`allTouched` 为 `true` 时检查是否所有字段都被操作过                                                                          | (nameList?: [NamePath](#namepath)\[], allTouched?: boolean) => boolean                                                                                                       |      |
| isFieldTouched    | 检查对应字段是否被用户操作过                                                                                                                               | (name: [NamePath](#namepath)) => boolean                                                                                                                                     |      |
| isFieldValidating | 检查对应字段是否正在校验                                                                                                                                   | (name: [NamePath](#namepath)) => boolean                                                                                                                                     |      |
| resetFields       | 重置一组字段到 `initialValues`                                                                                                                             | (fields?: [NamePath](#namepath)\[]) => void                                                                                                                                  |      |
| scrollToField     | 滚动到对应字段位置                                                                                                                                         | (name: [NamePath](#namepath), options: [ScrollOptions](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options)) => void |      |
| setFields         | 设置一组字段状态                                                                                                                                           | (fields: [FieldData](#fielddata)\[]) => void                                                                                                                                 |      |
| setFieldValue     | 设置表单的值（该值将直接传入 form store 中。如果你不希望传入对象被修改，请克隆后传入）                                                                     | (name: [NamePath](#namepath), value: any) => void                                                                                                                            |      |
| setFieldsValue    | 设置表单的值（该值将直接传入 form store 中。如果你不希望传入对象被修改，请克隆后传入）。如果你只想修改 Form.List 中单项值，请通过 `setFieldValue` 进行指定 | (values) => void                                                                                                                                                             |      |
| submit            | 提交表单，与点击 `submit` 按钮效果相同                                                                                                                     | () => void                                                                                                                                                                   |      |
| validateFields    | 触发表单验证                                                                                                                                               | (nameList?: [NamePath](#namepath)\[]) => Promise                                                                                                                             |      |

#### validateFields 返回示例

```js
validateFields()
  .then((values) => {
    /*
  values:
    {
      username: 'username',
      password: 'password',
    }
  */
  })
  .catch((errorInfo) => {
    /*
    errorInfo:
      {
        values: {
          username: 'username',
          password: 'password',
        },
        errorFields: [
          { name: ['password'], errors: ['Please input your Password!'] },
        ],
        outOfDate: false,
      }
    */
  });
```

## Hooks

### Form.useForm

`type Form.useForm = (): [FormInstance]`

创建 Form 实例，用于管理所有数据状态。

### Form.useFormInstance

`type Form.useFormInstance = (): FormInstance`

```js
const Sub = () => {
  const form = Form.useFormInstance();

  return <Button onClick={() => form.setFieldsValue({})} />;
};

export default () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Sub />
    </Form>
  );
};
```

### Form.useWatch

`type Form.useWatch = (namePath: NamePath, formInstance?: FormInstance): Value`

```js
const Demo = () => {
  const [form] = Form.useForm();
  const userName = Form.useWatch('username', form);

  const { data: options } = useSWR(`/api/user/${userName}`, fetcher);

  return (
    <Form form={form}>
      <Form.Item name="username">
        <AutoComplete options={options} />
      </Form.Item>
    </Form>
  );
};
```

### Form.Item.useStatus

`type Form.Item.useStatus = (): { status: ValidateStatus | undefined }`

```js
const CustomInput = ({ value, onChange }) => {
  const { status } = Form.Item.useStatus();
  return (
    <input
      value={value}
      onChange={onChange}
      className={`custom-input-${status}`}
    />
  );
};

export default () => (
  <Form>
    <Form.Item name="username">
      <CustomInput />
    </Form.Item>
  </Form>
);
```

#### 与其他获取数据的方式的区别

Form 仅会对变更的 Field 进行刷新，从而避免完整的组件刷新可能引发的性能问题。因而你无法在 render 阶段通过 `form.getFieldsValue` 来实时获取字段值，而 `useWatch` 提供了一种特定字段访问的方式，从而使得在当前组件中可以直接消费字段的值。同时，如果为了更好的渲染性能，你可以通过 Field 的 renderProps 仅更新需要更新的部分。而当当前组件更新或者 effect 都不需要消费字段值时，则可以通过 `onValuesChange` 将数据抛出，从而避免组件更新。

### Interface

#### NamePath

`string | number | (string | number)[]`

#### FieldData

| 名称       | 说明             | 类型                     |
| ---------- | ---------------- | ------------------------ |
| errors     | 错误信息         | string\[]                |
| warnings   | 警告信息         | string\[]                |
| name       | 字段名称         | [NamePath](#namepath)\[] |
| touched    | 是否被用户操作过 | boolean                  |
| validating | 是否正在校验     | boolean                  |
| value      | 字段对应值       | any                      |

#### Rule

Rule 支持接收 object 进行配置，也支持 function 来动态获取 form 的数据：

```js
type Rule = RuleConfig | ((form: FormInstance) => RuleConfig);
```

| 名称            | 说明                                                                                            | 类型                              | 版本 |
| --------------- | ----------------------------------------------------------------------------------------------- | --------------------------------- | ---- |
| defaultField    | 仅在 `type` 为 `array` 类型时有效，用于指定数组元素的校验规则                                   | [rule](#rule)                     |      |
| enum            | 是否匹配枚举中的值（需要将 `type` 设置为 `enum`）                                               | any\[]                            |      |
| fields          | 仅在 `type` 为 `array` 或 `object` 类型时有效，用于指定子元素的校验规则                         | Record&lt;string, [rule](#rule)>  |      |
| len             | string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度                     | number                            |      |
| max             | 必须设置 `type`：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度 | number                            |      |
| message         | 错误信息，不设置时会通过[模板](#validatemessages)自动生成                                       | string                            |      |
| min             | 必须设置 `type`：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度 | number                            |      |
| pattern         | 正则表达式匹配                                                                                  | RegExp                            |      |
| required        | 是否为必选字段                                                                                  | boolean                           |      |
| transform       | 将字段值转换成目标值后进行校验                                                                  | (value) => any                    |      |
| type            | 类型，常见有 `string` \|`number` \|`boolean` \|`url` \| `email`。                               | string                            |      |
| validateTrigger | 设置触发验证时机，必须是 Form.Item 的 `validateTrigger` 的子集                                  | string \| string\[]               |      |
| validator       | 自定义校验，接收 Promise 作为返回值。[示例](#docs-components-form-demo-register)参考            | ([rule](#rule), value) => Promise |      |
| warningOnly     | 仅警告，不阻塞表单提交                                                                          | boolean                           |      |
| whitespace      | 如果字段仅包含空格则校验不通过，只在 `type: 'string'` 时生效                                    | boolean                           |      |

## FAQ

### 自定义 validator 没有效果

这是由于你的 `validator` 有错误导致 `callback` 没有执行到。你可以选择通过 `async` 返回一个 promise 或者使用 `try...catch` 进行错误捕获：

```js
validator: async (rule, value) => {
  throw new Error('Something wrong!');
}

// or

validator(rule, value, callback) => {
  try {
    throw new Error('Something wrong!');
  } catch (err) {
    callback(err);
  }
}
```

### name 为数组时的转换规则？

当 `name` 为数组时，会按照顺序填充路径。当存在数字且 form store 中没有该字段时会自动转变成数组。因而如果需要数组为 key 时请使用 string 如：`['1', 'name']`。

### 为何在 Modal 中调用 form 控制台会报错？

> Warning: Instance created by `useForm` is not connect to any Form element. Forget to pass `form` prop?

这是因为你在调用 form 方法时，Modal 还未初始化导致 form 没有关联任何 Form 组件。你可以通过给 Modal 设置 `forceRender` 将其预渲染。

### 为什么 Form.Item 下的子组件 `defaultValue` 不生效？

当你为 Form.Item 设置 `name` 属性后，子组件会转为受控模式。因而 `defaultValue` 不会生效。你需要在 Form 上通过 `initialValues` 设置默认值。

### 为什么第一次调用 `ref` 的 Form 为空？

`ref` 仅在节点被加载时才会被赋值，请参考 React 官方文档：<https://reactjs.org/docs/refs-and-the-dom.html#accessing-refs>

### 为什么 `resetFields` 会重新 mount 组件？

`resetFields` 会重置整个 Field，因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。

### Form 的 initialValues 与 Item 的 initialValue 区别？

在大部分场景下，我们总是推荐优先使用 Form 的 `initialValues`。只有存在动态字段时你才应该使用 Item 的 `initialValue`。默认值遵循以下规则：

1. Form 的 `initialValues` 拥有最高优先级
2. Field 的 `initialValue` 次之 \*. 多个同 `name` Item 都设置 `initialValue` 时，则 Item 的 `initialValue` 不生效

### 为什么字段设置 `rules` 后更改值 `onFieldsChange` 会触发三次？

字段除了本身的值变化外，校验也是其状态之一。因而在触发字段变化会经历以下几个阶段：

1. Trigger value change
2. Rule validating
3. Rule validated

在触发过程中，调用 `isFieldValidating` 会经历 `false` > `true` > `false` 的变化过程。

### 为什么 Form.List 不支持 `label` 还需要使用 ErrorList 展示错误？

Form.List 本身是 renderProps，内部样式非常自由。因而默认配置 `label` 和 `error` 节点很难与之配合。如果你需要 metro 样式的 `label`，可以通过外部包裹 Form.Item 来实现。

### 为什么 Form.Item 的 `dependencies` 对 Form.List 下的字段没有效果？

Form.List 下的字段需要包裹 Form.List 本身的 `name`，比如：

```js
<Form.List name="users">
  {(fields) =>
    fields.map((field) => (
      <React.Fragment key={field.key}>
        <Form.Item name={[field.name, 'name']} {...someRest1} />
        <Form.Item name={[field.name, 'age']} {...someRest1} />
      </React.Fragment>
    ))
  }
</Form.List>
```

依赖则是：`['users', 0, 'name']`

### 为什么 `normalize` 不能是异步方法？

React 中异步更新会导致受控组件交互行为异常。当用户交互触发 `onChange` 后，通过异步改变值会导致组件 `value` 不会立刻更新，使得组件呈现假死状态。如果你需要异步触发变更，请通过自定义组件实现内部异步状态。

滚动依赖于表单控件元素上绑定的 `id` 字段，如果自定义控件没有将 `id` 赋到正确的元素上，这个功能将失效。

### `setFieldsValue` 不会触发 `onFieldsChange` 和 `onValuesChange`？

是的，change 事件仅当用户交互才会触发。该设计是为了防止在 change 事件中调用 `setFieldsValue` 导致的循环问题。如果仅仅需要组件内消费，可以通过 `useWatch` 或者 `Field.renderProps` 来实现。
