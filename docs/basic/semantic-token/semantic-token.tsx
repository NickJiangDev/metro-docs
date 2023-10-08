/**
 * inline: true
 */

import {
  Button,
  ConfigProvider,
  ConfigProviderProps,
  RadioChangeEvent,
} from '@metro/components';
import { usePrefersColor } from 'dumi';
import React, { useState } from 'react';
import SemanticTable from '../../_temp/semantic-table';
import ThemeRadio from '../../_temp/theme-radio';
import copyToClipboard from '../../_util/copyToClipboard';
import { getTheme } from '../../_util/getTheme';
import getGlobalTokenMap from '../_util/getGlobalTokenMap';
//@ts-ignore
import lightColorJson from '../_json/colors/light-color.json';
//@ts-ignore
import darkColorJson from '../_json/colors/dark-color.json';
//@ts-ignore
import lightTokenJson from '../_json/tokens/light-token.json';
//@ts-ignore
import darkTokenJson from '../_json/tokens/dark-token.json';

const themeMap: any = {
  light: getGlobalTokenMap(lightColorJson),
  dark: getGlobalTokenMap(darkColorJson),
};

const reTransData = (data: any, theme: string, title: string) =>
  data.map((d: any) => {
    const isBorder = themeMap[theme][d.gt] === '#ffffff';
    const isShadow = title === 'Shadows';
    const defaultBackgroundColor = `var(--metro-bg-1)`;
    const shadowColor = isShadow ? d.gt : undefined;
    return {
      ...d,
      gt: isShadow ? '--' : `${d.gt} ${d.a ?? ''}`,
      colorText: themeMap[theme][d.gt] ?? d.gt,
      color: (
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 4,
            backgroundColor: themeMap[theme][d.gt] ?? defaultBackgroundColor,
            opacity: d.a ?? 1,
            border: '1px solid transparent',
            borderColor: isBorder ? 'var(--metro-border-1)' : 'transparent',
            boxShadow: shadowColor,
          }}
        />
      ),
      action: (
        <Button.Link
          primary
          onClick={() => copyToClipboard(d.st, `${d.st} 颜色已复制到粘贴板`)}
        >
          Copy
        </Button.Link>
      ),
    };
  });

const dataSource: any = {
  light: lightTokenJson,
  dark: darkTokenJson,
};

const App: React.FC = () => {
  const [color] = usePrefersColor();
  const currentTheme = getTheme(
    document.getElementById('metro-config-provider'),
  );
  const [theme, setTheme] = useState<string>(currentTheme);

  React.useEffect(() => {
    color && setTheme(color);
  }, [color]);

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setTheme(value);
  };
  return (
    <>
      <br />
      <ThemeRadio onChange={onChange} value={theme} />
      <br />
      <ConfigProvider theme={theme as ConfigProviderProps['theme']}>
        <div>
          {dataSource[theme].map(({ title, data }: any) => (
            <SemanticTable
              data={reTransData(data, theme, title)}
              title={title}
              key={title}
            />
          ))}
        </div>
      </ConfigProvider>
    </>
  );
};

export default App;
