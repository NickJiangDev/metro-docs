---
toc: content
title: ColorPicker（颜色选择器）
nav:
  title: 组件
group:
  title: 反馈
demo:
  cols: 2
---

# ColorPicker（颜色选择器）

提供颜色选取的组件

## 代码演示

<code src="./panel.tsx" description="提供一个pure Panel。">Panel</code>
<code src="./hide-favors.tsx" description="提供一个单一的颜色选择。">隐藏收藏</code>

<code src="./basic.tsx">基础使用</code>
<code src="./children.tsx" description="自定义颜色面板的触发器。传入`children`">自定义触发器</code>

## API

| 参数                        | 说明                                        | 类型                                                | 默认值 | 版本 |
| --------------------------- | ------------------------------------------- | --------------------------------------------------- | ------ | ---- |
| color                       | 颜色值                                      | `string`                                            | -      |      |
| type                        | 颜色类型                                    | `string`                                            | -      |      |
| rotate                      | 旋转角度                                    | `string`                                            | -      |      |
| favors                      | 偏好颜色集合                                | `string[]` \| `null`                                | -      |      |
| labelFavor                  | 偏好标签                                    | `string`                                            | -      |      |
| labelFavorPlaceholder       | 偏好标签占位文本                            | `string`                                            | -      |      |
| onChangeColors              | 颜色改变回调函数                            | `(colors: string[]) => void`                        | -      |      |
| onChange                    | 颜色改变回调函数                            | `(color: string, index?: number) => void`           | -      |      |
| stops                       | 渐变表                                      | `StopProps[]`                                       | -      |      |
| className                   | 类名                                        | `string`                                            | -      |      |
| onStopsChange               | 渐变表改变回调函数                          | `(stops: StopProps[], color?: string) => void`      | -      |      |
| showUpload                  | 上传                                        | `() => void`                                        | -      |      |
| showMedia                   | 媒体选择                                    | `() => void`                                        | -      |      |
| imgSrc                      | 图片路径                                    | `string`                                            | -      |      |
| imgSize                     | 图片尺寸                                    | `string`                                            | -      |      |
| showTypeSelect              | 是否显示类型选择控件                        | `boolean`                                           | -      |      |
| showPureColorOption         | 是否显示纯色选项                            | `boolean`                                           | -      |      |
| showGradientOption          | 是否显示渐变选项                            | `boolean`                                           | -      |      |
| showImageOption             | 是否显示图片选项                            | `boolean`                                           | -      |      |
| onSizeChange                | 图片尺寸改变回调函数                        | `(item: string) => void`                            | -      |      |
| onRotateChange              | 旋转角度改变回调函数                        | `(item: string) => void`                            | -      |      |
| onActiveTypeChange          | 活动颜色类型改变回调函数                    | `(type: string) => void`                            | -      |      |
| bgSizeOptions               | 可用背景尺寸选项的属性                      | `DefaultOptionType[]`                               | -      |      |
| labelRotate                 | 旋转标签                                    | `string`                                            | -      |      |
| labelUpload                 | 上传标签                                    | `string`                                            | -      |      |
| labelSelectMedia            | 媒体选择标签                                | `string`                                            | -      |      |
| colorPresetOptions          | 可用颜色预设选项的属性                      | `MenuProps['items']`                                | -      |      |
| disabledTypeSelect          | 是否禁用类型选择控件                        | `boolean`                                           | -      |      |
| disableGradientRotateSelect | 是否禁用渐变类型的旋转控件                  | `boolean`                                           | -      |      |
| disabled                    | 是否禁用                                    | `boolean`                                           | -      |      |
| pickColorFromMap            | 取色器是否从拾色器中取色                    | `boolean`                                           | -      |      |
| toMeasureCanvas             | 用于测量颜色的画布元素                      | `HTMLCanvasElement` \| `null`                       | -      |      |
| toGetColorCanvas            | 用于获取颜色的画布元素                      | `HTMLCanvasElement` \| `null`                       | -      |      |
| useShadowElementToPickColor | 是否使用 shadow DOM 来选取颜色              | `boolean`                                           | -      |      |
| shadowElementContainer      | shadow 元素的容器元素，用于添加 shadow 元素 | `HTMLElement` \| `null`                             |        |
| footer                      | footer                                      | () => React.ReactNode                               | -      |      |
| createFilterProps           | 外部容器的属性                              | [createFilterProps](/components/create-filter/#api) | -      |      |
