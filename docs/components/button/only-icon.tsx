import { Button, Divider, Space } from '@metro/components';
import { Launch } from '@metro/icons/dist/esm/react';

export default () => (
  <>
    <Divider>size onlyIcon</Divider>
    <Space wrap>
      <Button icon={<Launch />} onlyIcon size="large" />
      <Button icon={<Launch />} onlyIcon />
      <Button icon={<Launch />} onlyIcon size="small" />
    </Space>
    <Divider>status/type onlyIcon</Divider>
    <Space wrap>
      <Button icon={<Launch />} onlyIcon />
      <Button type="primary" icon={<Launch />} onlyIcon />
      <Button ghost icon={<Launch />} onlyIcon />
      <Button danger icon={<Launch />} onlyIcon />
      <Button success icon={<Launch />} onlyIcon />
    </Space>
  </>
);
