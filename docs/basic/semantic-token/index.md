---
toc: content
title: 主题变量
group:
  title: 色彩
order: 4
---

# 主题变量

## 为什么要使用变量

变量实际上是将设计中的基础元素与具体的样式进行解耦。

对于设计师来说，如果产品的风格需要迭代更新，比如需要更新 危险 的功能色，即 color-danger，只需要修改其对应的颜色默认值，既可以完成整套产品的 UI 迭代。

对于研发来说，为了配合产品风格的更新迭代，使用 Design Token 时可以更快速地完成所有组件的样式更新，而无需一处处地进行修改，这也是为什么在开发的过程尤其需要注意使用变量而不是固定的数默认值。如果产品的风格有多个平台共用的话，也能事半功倍。

特别地，对于有暗色模式需求的平台，需要使用 Metro design System 的颜色变量才能实现一键切换明暗色的效果。因此这里向大家详细地介绍 Metro design System 的 Design Token 体系以及如何使用它们。

此处定义的色彩变量为 **“语义变量”**，因为跟组件库的主题色绑定使用，又叫 **“主题变量”**，是基于“[全局变量](/basic/global-token)”的基础上对外是用的颜色变量。

对于语义变量的命名，需描述色彩的使用场景，而不是色彩本身的特征，比如 Primary-default Primary-hover 等等。

## 命名规范

命名规则为：**--metro-[Color-type]-[Status]-[number]**

例如：`--metro-primary-default` 对于基础的主题色变量命名的解读： **--metro-[Primary]-[Default]**

## 变量展示

<code src="./semantic-token.tsx"></code>
