import { Space } from '@metro/components';
import map from 'lodash-es/map';
import React from 'react';
import copyToClipboard from '../_util/copyToClipboard';
import './color-box.less';

type JsonInterface = {
  title: string;
  primaryChildren?: string | number;
  children: { color: string; name: string }[];
};

interface IColors {
  dataSource?: JsonInterface[];
}

const Colors: React.FC<IColors> = React.memo((props) => {
  const { dataSource = [] } = props;

  return (
    <>
      {map(dataSource, ({ title, primaryChildren, children = [] }) => {
        return (
          <Space direction="vertical" key={title} style={{ marginBottom: 20 }}>
            <div className="colors-title">{title}</div>
            <Space size={6} wrap>
              {map(children, ({ name, color }, index: number) => {
                let primarySingle: string = '';
                primaryChildren &&
                  (primaryChildren === color || primaryChildren === index) &&
                  (primarySingle = 'P');

                return (
                  <div
                    className="colors-item"
                    key={name}
                    onClick={() =>
                      copyToClipboard(color, `${color} 颜色已复制到粘贴板`)
                    }
                  >
                    <div
                      className="colors-item-color-box"
                      style={{ background: color }}
                    >
                      {primarySingle}
                    </div>
                    <div className="colors-item-name">{name}</div>
                    <div className="colors-item-desc">{color}</div>
                  </div>
                );
              })}
            </Space>
          </Space>
        );
      })}
    </>
  );
});

export default Colors;
