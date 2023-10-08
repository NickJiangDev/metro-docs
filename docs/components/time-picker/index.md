---
toc: content
title: TimePicker（时间选择框）
nav:
  title: 组件
group:
  title: 数据录入
demo:
  cols: 2
---

# TimePicker（时间选择框）

输入或选择时间的控件。

## 代码演示

<!-- prettier-ignore -->
<code src="./basic.tsx" description="点击 TimePicker，然后可以在浮层中选择或者输入某一时间。">基本</code>
<code src="./value.tsx" description="value 和 onChange 需要配合使用。">受控组件</code>
<code src="./size.tsx" description="三种大小的输入框，大的用在表单中，中的为默认。">三种大小</code>
<code src="./disabled.tsx" description="禁用时间选择。">禁用</code>
<code src="./hide-column.tsx" description="TimePicker 浮层中的列会随着 `format` 变化，当略去 `format` 中的某部分时，浮层中对应的列也会消失。">选择时分</code>
<code src="./interval-options.tsx" description="可以使用 `hourStep` `minuteStep` `secondStep` 按步长展示可选的时分秒。">步长选项</code>
<code src="./addon.tsx" description="在 TimePicker 选择框底部显示自定义的内容。">附加内容</code>
<code src="./12hours.tsx" description="12 小时制的时间选择器，默认的 `format` 为 `h:mm:ss a`。">12 小时制</code>
<code src="./range-picker.tsx" description="通过 `TimePicker.RangePicker` 使用时间范围选择器。">范围选择器</code>
<code src="./bordered.tsx" description="无边框样式。">无边框</code>
<code src="./status.tsx" description="使用 `status` 为 TimePicker 添加状态，可选 `error` 或者 `warning`。">自定义状态</code>

## API

---

```js
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)
<TimePicker defaultValue={dayjs('13:30:56', 'HH:mm:ss')} />;
```

| 参数                | 说明                                                          | 类型                                            | 默认值       | 版本 |
| ------------------- | ------------------------------------------------------------- | ----------------------------------------------- | ------------ | ---- |
| allowClear          | 是否展示清除按钮                                              | boolean                                         | true         |      |
| autoFocus           | 自动获取焦点                                                  | boolean                                         | false        |      |
| bordered            | 是否有边框                                                    | boolean                                         | true         |      |
| className           | 选择器类名                                                    | string                                          | -            |      |
| clearIcon           | 自定义的清除图标                                              | ReactNode                                       | -            |      |
| clearText           | 清除按钮的提示文案                                            | string                                          | clear        |      |
| defaultValue        | 默认时间                                                      | [dayjs](http://day.js.org/)                     | -            |      |
| disabled            | 禁用全部操作                                                  | boolean                                         | false        |      |
| disabledTime        | 不可选择的时间                                                | [DisabledTime](#disabledtime)                   | -            |      |
| format              | 展示的时间格式                                                | string                                          | `HH:mm:ss`   |      |
| getPopupContainer   | 定义浮层的容器，默认为 body 上新建 div                        | function(trigger)                               | -            |      |
| hideDisabledOptions | 隐藏禁止选择的选项                                            | boolean                                         | false        |      |
| hourStep            | 小时选项间隔                                                  | number                                          | 1            |      |
| inputReadOnly       | 设置输入框为只读（避免在移动设备上打开虚拟键盘）              | boolean                                         | false        |      |
| minuteStep          | 分钟选项间隔                                                  | number                                          | 1            |      |
| open                | 面板是否打开                                                  | boolean                                         | false        |      |
| placeholder         | 没有值的时候显示的内容                                        | string \| \[string, string]                     | `请选择时间` |      |
| placement           | 选择框弹出的位置                                              | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft   |      |
| popupClassName      | 弹出层类名                                                    | string                                          | -            |      |
| popupStyle          | 弹出层样式对象                                                | object                                          | -            |      |
| renderExtraFooter   | 选择框底部显示自定义的内容                                    | () => ReactNode                                 | -            |      |
| secondStep          | 秒选项间隔                                                    | number                                          | 1            |      |
| showNow             | 面板是否显示“此刻”按钮                                        | boolean                                         | -            |      |
| size                | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `large` \| `middle` \| `small`                  | -            |      |
| status              | 设置校验状态                                                  | 'error' \| 'warning'                            | -            |      |
| suffixIcon          | 自定义的选择框后缀图标                                        | ReactNode                                       | -            |      |
| use12Hours          | 使用 12 小时制，为 true 时 `format` 默认为 `h:mm:ss a`        | boolean                                         | false        |      |
| value               | 当前时间                                                      | [dayjs](http://day.js.org/)                     | -            |      |
| onChange            | 时间发生变化的回调                                            | function(time: dayjs, timeString: string): void | -            |      |
| onOpenChange        | 面板打开/关闭时的回调                                         | (open: boolean) => void                         | -            |      |

#### DisabledTime

```js
type DisabledTime = (now: Dayjs) => {
  disabledHours?: () => number[],
  disabledMinutes?: (selectedHour: number) => number[],
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[],
};
```

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |

## RangePicker

属性与 DatePicker 的 [RangePicker](/components/date-picker#rangepicker) 相同。还包含以下属性：

| 参数         | 说明                 | 类型                                    | 默认值 | 版本 |
| ------------ | -------------------- | --------------------------------------- | ------ | ---- |
| disabledTime | 不可选择的时间       | [RangeDisabledTime](#rangedisabledtime) | -      |      |
| order        | 始末时间是否自动排序 | boolean                                 | true   |      |

### RangeDisabledTime

```js
type RangeDisabledTime = (
  now: Dayjs,
  type = 'start' | 'end',
) => {
  disabledHours?: () => number[];
  disabledMinutes?: (selectedHour: number) => number[];
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
};
```
