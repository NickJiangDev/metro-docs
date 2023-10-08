---
toc: content
title: Draggable (拖动组件)
nav:
  title: 组件
group:
  title: 反馈
demo:
  cols: 2
---

# Draggable (拖动组件)

可拖动的组件包裹。

## 代码演示

<code src="./basic.tsx">基础使用</code>
<code src="./axis.tsx" description="指定移动方向，默认`both`">移动方向</code>
<code src="./hideHandler.tsx" description="默认打开，可以手动隐藏。">隐藏拖动处理器</code>

## API

| 参数                     | 说明                                      | 类型                                                       | 默认值 | 版本 |
| ------------------------ | ----------------------------------------- | ---------------------------------------------------------- | ------ | ---- |
| axis                     | 设置移动方向                              | `'both' \| 'x' \| 'y' \| 'none'`                           | `both` |      |
| bounds                   | 指定运动边界                              | [DraggableBounds](#draggablebounds) \| `string` \| `false` | `body` |      |
| defaultClassName         | 类名                                      | `string`                                                   | -      |      |
| defaultClassNameDragging | 拖动中的类名                              | `string`                                                   | -      |      |
| defaultClassNameDragged  | 拖动结束的类名                            | `string`                                                   | -      |      |
| defaultPosition          | 指定拖动项的起始位置为' x '和' y '        | `{ x: number; y: number }`                                 | -      |      |
| positionOffset           | 起始位置的偏移量。用于给出初始位置        | `{ x: number \| string; y: number \| string }`             | -      |      |
| position                 | 受控，用于直接控制元素的位置              | `{ x: number; y: number }`                                 | -      |      |
| allowAnyClick            | 如果设置为 `true`, 将允许拖动非左键点击。 | `boolean`                                                  | -      |
| cancel                   | 指定用于防止拖动初始化的选择器            | `string`                                                   | -      |      |
| disabled                 | 不调用任何拖动处理程序。                  | `boolean`                                                  | -      |      |
| enableUserSelectHack     | 在主体中添加一个样式来禁用用户选择。      | `boolean`                                                  | -      |      |
| offsetParent             | 提供自己的父类参与计算                    | `HTMLElement`                                              | -      |      |
| grid                     | 指定拖拽应该对齐的 x 和 y                 | `[number, number]`                                         | -      |      |
| handle                   | 指定用作启动拖动的句柄的选择器            | `string`                                                   | -      |      |
| onStart                  | 当拖动开始时调用                          | `DraggableEventHandler`                                    | -      |      |
| onDrag                   | 拖动时调用                                | `DraggableEventHandler`                                    | -      |      |
| onStop                   | 拖动停止时调用                            | `DraggableEventHandler`                                    | -      |      |
| onMouseDown              | 当用户鼠标按下时调用                      | `(e: MouseEvent) => void`                                  | -      |      |
| scale                    | 指定拖动此元素的画布的比例                | `number`                                                   | -      |      |
| children                 | -                                         | `React.ReactNode`                                          | -      |      |
| hideHandler              | 隐藏拖动处理器                            | `boolean`                                                  | -      |      |

## DraggableBounds

```js
 export interface DraggableBounds {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
```
