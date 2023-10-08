import { defineConfig } from 'dumi';

// const publicPath = '/statics/metro-design-doc/';
const publicPath = '/metro-docs/';

export default defineConfig({
  themeConfig: {
    name: 'MDS',
    logo: `${publicPath}/mds-logo.svg`,
    footer: `© 2023 上海脉策数据科技有限公司<br />Themes by 脉策研发中心`,
    prefersColor: { default: 'dark' },
    socialLinks: {
      gitlab:
        'https://gitlab.idatatlas.com/new-datamap/metro-components/metro-design',
    },
  },
  theme: {
    '@s-content-width': '2000px',
  },
  favicons: [`${publicPath}/mds-logo.svg`],
  alias: {
    '@metro/components': require.resolve('../components/src/index.ts'),
    '@metro/rule-form': require.resolve('../rule-form/src/index.ts'),
  },

  // 关闭 mfsu 功能, 用于component刷新监听
  mfsu: false,
  // 关于base加结尾的必要 https://github.com/umijs/dumi/issues/1608
  base: publicPath,
  publicPath,
});
