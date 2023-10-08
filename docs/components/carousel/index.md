---
toc: content
title: Carousel（轮播图）
nav:
  title: 组件
group:
  title: 数据展示
demo:
  cols: 2
---

# Carousel（轮播图）

旋转木马，一组轮播的区域。

## 代码演示

<code src="./basic.tsx" description="最简单的用法。">基本</code>
<code src="./show-arrow.tsx" description="是否展示箭头。 只在`top` `bottom` 位置下有效。">箭头展示</code>
<code src="./direction.tsx" description="位置有4个方向。">位置</code>
<code src="./autoplay.tsx" description="定时切换下一张。">自动切换</code>
<code src="./fade.tsx" description="切换效果为渐显。">渐显</code>

## API

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoplay | 是否自动切换 | boolean | false |  |
| autoplaySpeed | 自动切换间隔时间 | number | 2000 |  |
| arrows | 展示左右箭头 | boolean | false |  |
| prevArrow | 左箭头 | React.ReactNode | `<ArrowCircleLeftFilled />` |  |
| nextArrow | 右箭头 | React.ReactNode | `<ArrowCircleRightFilled />` |  |
| dotPosition | 面板指示点位置，可选 `top` `bottom` `left` `right` | string | `bottom` |  |
| dots | 是否显示面板指示点，如果为 `object` 则同时可以指定 `dotsClass` 或者 | boolean \| { className?: string } | true |  |
| waitForAnimate | 是否等待切换动画 | boolean | false |  |
| easing | 动画效果 | string | `linear` |  |
| effect | 动画效果函数 | `scrollx` \| `fade` | `scrollx` |  |
| afterChange | 切换面板的回调 | (current: number) => void | - |  |
| beforeChange | 切换面板的回调 | (current: number, next: number) => void | - |  |

## 方法

<!-- prettier-ignore -->
| 名称                           | 描述                                              |
| ------------------------------ | ------------------------------------------------- |
| goTo(slideNumber, dontAnimate) | 切换到指定面板, dontAnimate = true 时，不使用动画 |
| next()                         | 切换到下一面板                                    |
| prev()                         | 切换到上一面板                                    |
