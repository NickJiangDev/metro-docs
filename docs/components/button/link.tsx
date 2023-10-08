import { Button, Space } from '@metro/components';
import { Launch } from '@metro/icons/dist/esm/react';

export default () => (
  <Space direction="vertical">
    <Space>
      <Button.Link size="small">button</Button.Link>
      <Button.Link>button</Button.Link>
      <Button.Link icon={<Launch />} iconDirection="right">
        button
      </Button.Link>
      <Button.Link disabled>button</Button.Link>
    </Space>
    <Space>
      <Button.Link primary size="small">
        button
      </Button.Link>
      <Button.Link primary>button</Button.Link>
      <Button.Link primary icon={<Launch />} iconDirection="right">
        button
      </Button.Link>
      <Button.Link primary disabled>
        button
      </Button.Link>
    </Space>
    <Space>
      <Button.Link danger size="small">
        button
      </Button.Link>
      <Button.Link danger>button</Button.Link>
      <Button.Link danger icon={<Launch />} iconDirection="right">
        button
      </Button.Link>
      <Button.Link danger disabled>
        button
      </Button.Link>
    </Space>
  </Space>
);
