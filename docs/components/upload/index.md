---
toc: content
title: Upload（上传）
nav:
  title: 组件
group:
  title: 数据录入
---

# Upload（上传）

文件选择上传和拖拽上传控件。

## 代码演示

<code src="./basic.tsx">基础上传</code>
<code src="./info.tsx">修改卡片的样式</code>
<code src="./custom-render.tsx">提供包裹</code>

## API

:::info{title='类型'}

### Accept

```js
typeof Accept = [key: string]: string[];
```

该值必须是一个对象，其中以公共 [MIME 类型](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)作为键，以文件扩展名数组作为值(类似于 [showOpenFilePicker](https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker) 的类型接受选项)。

```js
useDropzone({
  accept: {
    'image/png': ['.png'],
    'text/html': ['.html', '.htm'],
  },
});
```

:::

| 参数                  | 说明                                   | 类型                                                                           | 默认值                         | 版本 |
| --------------------- | -------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------ | ---- |
| multiple              | 允许用户传入多个文件                   | boolean                                                                        |                                |      |
| accept                | 接收的文件类型                         | [Accept](#accept)                                                              |                                |      |
| preventDropOnDocument | 设置允许删除的项目接管当前的浏览器窗口 | boolean                                                                        | -                              |      |
| noClick               | 禁用点击                               | boolean                                                                        | -                              |      |
| noKeyboard            | 禁用键盘                               | boolean                                                                        | -                              |      |
| noDrag                | 禁用拖拽                               | boolean                                                                        |                                |      |
| noDragEventsBubbling  | 设置停止将拖拽传播拖到父级             | boolean                                                                        |                                |      |
| disabled              | 禁用状态                               | boolean                                                                        |                                |      |
| onDrop                | 拖拽回调                               | (acceptedFiles: T[], fileRejections: FileRejection[],event: DropEvent) => void |                                |
| onDropAccepted        | 拖拽接收回调                           | (files: T[], event: DropEvent): void;                                          |                                |      |
| onDropRejected        | 拖拽失败回调                           | (fileRejections: FileRejection[], event: DropEvent): void;                     |                                |      |
| getFilesFromEvent     | 提供一个文件聚合器                     | (event: DropEvent): Promise;                                                   |                                |      |
| onFileDialogCancel    | 文件选择对话框关闭回调                 | (): void                                                                       |                                |      |
| icon                  | 标题 icon                              | React.ReactNode                                                                | UploadIcon                     |      |
| tip                   | 提示文案                               | React.ReactNode                                                                | 点击或拖拽文件到此区域         |      |
| desc                  | 描述文案                               | React.ReactNode                                                                | 支持 SVG, PNG, JPG or GIF 格式 |      |
| extra                 | 底部 render                            | React.ReactNode                                                                | -                              |      |
