import type { RadioChangeEvent } from '@metro/components';
import { Radio, Space, Tabs, Toggle } from '@metro/components';
import React, { useState } from 'react';

type TabPosition = 'left' | 'right' | 'top' | 'bottom' | undefined;

const App: React.FC = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>('left');
  const [barPosition, setBarPosition] = useState<TabPosition>('right');
  const [hideTrack, setHideTrack] = useState<boolean>(false);
  const [barPositionOptions, setBarPositionOptions] = useState<string[]>([
    'left',
    'right',
  ]);

  const changeTabPosition = (e: RadioChangeEvent) => {
    const position = e.target.value;
    setTabPosition(position);
    switch (position) {
      case 'top':
        setBarPositionOptions(['top', 'bottom']);
        setBarPosition('bottom');
        break;
      case 'bottom':
        setBarPositionOptions(['top', 'bottom']);
        setBarPosition('top');
        break;

      case 'left':
        setBarPositionOptions(['left', 'right']);
        setBarPosition('right');
        break;

      case 'right':
        setBarPositionOptions(['left', 'right']);
        setBarPosition('left');
        break;
    }
  };

  const changeBarPosition = (e: RadioChangeEvent) => {
    setBarPosition(e.target.value);
  };
  return (
    <>
      <Space style={{ marginBottom: 24 }} direction="vertical">
        Hide Track?:
        <Toggle checked={hideTrack} onChange={setHideTrack} />
        Tab position:
        <Radio.Group
          value={tabPosition}
          onChange={changeTabPosition}
          optionType="button"
        >
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
        {barPositionOptions.length ? (
          <>
            Bar position:
            <Radio.Group
              optionType="button"
              options={barPositionOptions}
              value={barPosition}
              onChange={changeBarPosition}
            />
          </>
        ) : null}
      </Space>
      <Tabs
        tabPosition={tabPosition}
        barPosition={barPosition}
        hideTrack={hideTrack}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      />
    </>
  );
};

export default App;
