/**
 * inline: true
 */
import { Input, Space, Tooltip } from '@metro/components';
import * as AllIcon from '@metro/icons/dist/esm/react';
import map from 'lodash-es/map';
import * as React from 'react';
import copyToClipboard from '../_util/copyToClipboard';
import './icon-list.less';

const allIconData = map(AllIcon, (_View, key) => {
  return { key, View: _View };
});

function toCamelCase(str: string) {
  const camelCaseStr = str.replace(/-([a-z])/g, function (match, p1) {
    return p1.toUpperCase();
  });
  return (
    (camelCaseStr.charAt(0).toUpperCase() + camelCaseStr.slice(1)) as any
  ).replaceAll('-', '');
}

const IconDemo = () => {
  const [data] = React.useState(allIconData);
  const [searchValue, setSearchValue] = React.useState('');
  const onSearchChange = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const camelSearchValue = toCamelCase(searchValue);
  const filterData = data.filter(({ key }) => key.includes(camelSearchValue));
  return (
    <>
      <Input
        placeholder="搜索图标🔎"
        onChange={onSearchChange}
        value={searchValue}
        allowClear
      />
      <h3>点击复制</h3>
      <Space wrap>
        {map(filterData, ({ key, View }) => {
          return (
            <Tooltip title={key} key={key}>
              <Space
                direction="vertical"
                style={{ alignItems: 'center' }}
                onClick={() => {
                  const dom = `<${key} />`;
                  copyToClipboard(dom, `${dom}复制成功，请去粘贴板查看`);
                }}
              >
                {<View className="icon-list-item" />}
              </Space>
            </Tooltip>
          );
        })}
      </Space>
    </>
  );
};
export default IconDemo;
