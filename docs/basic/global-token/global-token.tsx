/**
 * inline: true
 */

import { RadioChangeEvent } from '@metro/components';
import { usePrefersColor } from 'dumi';
import React, { useState } from 'react';
import Colors from '../../_temp/color-box';
import ThemeRadio from '../../_temp/theme-radio';
import { getTheme } from '../../_util/getTheme';
//@ts-ignore
import lightColorJson from '../_json/colors/light-color.json';
//@ts-ignore

import darkColorJson from '../_json/colors/dark-color.json';

const App: React.FC = () => {
  const [color] = usePrefersColor();
  const currentTheme = getTheme(
    document.getElementById('metro-config-provider'),
  );
  const [value, setValue] = useState(currentTheme);
  const options = value === 'light' ? lightColorJson : darkColorJson;

  React.useEffect(() => {
    color && setValue(color);
  }, [color]);

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
  };

  return (
    <>
      <br />
      <ThemeRadio onChange={onChange} value={value} />
      <br />
      <br />
      <Colors dataSource={options} />
    </>
  );
};

export default App;
