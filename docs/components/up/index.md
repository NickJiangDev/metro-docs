---
toc: content
title: Up（文件上传）
nav:
  title: 组件
group:
  title: 数据录入
demo:
  cols: 2
---

# Up（文件上传）

文件选择上传。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

当需要上传一个或一些文件时。
当需要展现上传的进度时。

## 代码演示

## 代码演示

<!-- prettier-ignore -->
<code src="./basic.tsx" description="经典款式，用户点击按钮弹出文件选择框。">点击上传</code>
<code src="./avatar.tsx" description="点击上传用户头像，并使用 `beforeUpload` 限制用户上传的图片格式和大小。 <br />`beforeUpload` 的返回值可以是一个 Promise 以支持异步处理">用户头像</code>
<code src="./defaultFileList.tsx" description="使用 `defaultFileList` 设置已上传的内容。">已上传的文件列表</code>
<code src="./picture-card.tsx" description="用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。">照片墙</code>
<code src="./picture-circle.tsx" description="图片卡的替代显示。">圆形照片墙</code>
<code src="./fileList.tsx" description="使用 fileList 对列表进行完全控制，可以实现各种自定义功能，以下演示二种情况：上传列表数量的限制。读取远程路径并显示链接。">完全控制的上传列表</code>
<code src="./directory.tsx" description="支持上传一个文件夹里的所有文件。">文件夹上传</code>
<code src="./upload-manually.tsx" description="`beforeUpload` 返回 `false` 后，手动上传文件。">手动上传</code>
<code src="./upload-png-only.tsx" description="`beforeUpload` 返回 `false` 或 `Promise.reject` 时，只用于拦截上传行为，不会阻止文件进入上传列表。如果需要阻止列表展现，可以通过返回 `Upload.LIST_IGNORE` 实现。">只上传 png 图片</code>
<code src="./picture-style.tsx" description="上传文件为图片，可展示本地缩略图。`IE8/9` 不支持浏览器本地缩略图展示（Ref），可以写 `thumbUrl` 属性来代替。">图片列表样式</code>
<code src="./max-count.tsx" description="通过 `maxCount` 限制上传数量。当为 `1` 时，始终用最新上传的代替当前。">限制数量</code>
<code src="./transform-file.tsx" description="使用 `beforeUpload` 转换上传的文件（例如添加水印）。">上传前转换文件</code>
<code src="./upload-custom-action-icon.tsx" description="使用 `showUploadList` 设置列表交互图标。">自定义交互图标</code>
<code src="./customize-progress-bar.tsx" description="使用 `progress` 属性自定义进度条样式。">自定义进度条样式</code>

## API

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| accept | 接受上传的文件类型，详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | - |  |
| action | 上传的地址 | string \| (file) => Promise&lt;string> | - |  |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）；也可以返回 `Up.LIST_IGNORE`，此时列表中将不展示此文件。 **注意：IE9 不支持该方法** | (file, fileList) => boolean \| Promise&lt;File> \| `Up.LIST_IGNORE` | - |  |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | function | - |  |
| data | 上传所需额外参数或返回上传额外参数的方法 | object\|(file) => object \| Promise&lt;object> | - |  |
| defaultFileList | 默认已经上传的文件列表 | object\[] | - |  |
| directory | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean | false |  |
| disabled | 是否禁用 | boolean | false |  |
| fileList | 已经上传的文件列表（受控）| [UpFile](#UpFile)\[] | - |  |
| headers | 设置上传的请求头部，IE10 以上有效 | object | - |  |
| iconRender | 自定义显示 icon | (file: UpFile, listType?: UpListType) => ReactNode | - |  |
| isImageUrl | 自定义缩略图是否使用 &lt;img /> 标签进行显示 | (file: UpFile) => boolean |  |  |
| itemRender | 自定义上传列表项 | (originNode: ReactElement, file: UpFile, fileList: object\[], actions: { download: function, preview: function, remove: function }) => React.ReactNode | - | |
| listType | 上传列表的内建样式，支持四种基本样式 `text`, `picture`, `picture-card` 和 `picture-circle` | string | `picture-circle` |  |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | number | - |  |
| method | 上传请求的 http method | string | `post` |  |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | boolean | false |  |
| name | 发到后台的文件参数名 | string | `file` |  |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true |  |
| previewFile | 自定义文件预览逻辑 | (file: File \| Blob) => Promise&lt;dataURL: string> | - |  |
| progress | 自定义进度条样式 | [ProgressProps](/components/progress#api)（仅支持 `type="line"`） | { strokeWidth: 2, showInfo: false } |  |
| showUploadList | 是否展示文件列表, 可设为一个对象，用于单独设定 `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` 和 `downloadIcon` | boolean \| { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean, previewIcon?: ReactNode \| (file: UpFile) => ReactNode, removeIcon?: ReactNode \| (file: UpFile) => ReactNode, downloadIcon?: ReactNode \| (file: UpFile) => ReactNode } | true |  |
| withCredentials | 上传请求时是否携带 cookie | boolean | false |  |
| onChange | 上传文件改变时的回调，上传每个阶段都会触发该事件。详见 [onChange](#onchange) | function | - |  |
| onDrop | 当文件被拖入上传区域时执行的回调功能 | (event: React.DragEvent) => void | - |  |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | function(file): void | (跳转新标签页) |  |
| onPreview | 点击文件链接或预览图标时的回调 | function(file) | - |  |
| onRemove   | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除               | function(file): boolean \| Promise | -   |  |

### UpFile

继承自 File，附带额外属性用于渲染。

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| crossOrigin | CORS 属性设置 | `'anonymous'` \| `'use-credentials'` \| `''` | - |  |
| name | 文件名 | string | - | - |
| percent | 上传进度 | number | - | - |
| status | 上传状态，不同状态展示颜色也会有所不同 | `error` \| `done` \| `uploading` \| `removed` | - | - |
| thumbUrl | 缩略图地址 | string | - | - |
| uid | 唯一标识符，不设置时会自动生成 | string | - | - |
| url | 下载地址 | string | - | - |

### onChange

> 💡 上传中、完成、失败都会调用这个函数。

文件状态改变的回调，返回为：

```js
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1. `file` 当前操作的文件对象。

   ```js
   {
      uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
      name: 'xx.png',   // 文件名
      status: 'done' | 'uploading' | 'error' | 'removed' , //  beforeUpload 拦截的文件没有 status 状态属性
      response: '{"status": "success"}', // 服务端响应内容
      linkProps: '{"download": "image"}', // 下载链接额外的 HTML 属性
   }
   ```

2. `fileList` 当前的文件列表。

3. `event` 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。
