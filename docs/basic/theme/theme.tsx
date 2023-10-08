/**
 * inline: true
 */

import {
  ConfigProvider,
  ConfigProviderProps,
  RadioChangeEvent,
} from '@metro/components';
import { usePrefersColor } from 'dumi';
import React, { useState } from 'react';
import ThemeRadio from '../../_temp/theme-radio';
import { getTheme } from '../../_util/getTheme';
import System from './system';

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
      <span>切换主题： </span>
      <ThemeRadio onChange={onChange} value={theme} />
      <br />
      <br />
      <ConfigProvider theme={theme as ConfigProviderProps['theme']}>
        <div>
          <System />
        </div>
      </ConfigProvider>
    </>
  );
};

export default App;
