import { loadTheme } from '@metro/components';
import { useOutlet, usePrefersColor } from 'dumi';
import React from 'react';

import './GlobalLayout.less';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const [color] = usePrefersColor();

  React.useEffect(() => {
    loadTheme(color);
  }, [color]);

  return <div className="global-layout-custom">{outlet}</div>;
};

export default GlobalLayout;
