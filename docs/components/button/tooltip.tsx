import { Button, Divider, Space } from '@metro/components';

export default () => (
  <Space direction="vertical">
    <Divider>Normal</Divider>
    <Space>
      <Button showTooltip tooltipTitle="I am a tooltip title">
        Button
      </Button>
      <Button.Check showTooltip tooltipTitle="I am a tooltip title">
        Check Button
      </Button.Check>
      <Button.Link showTooltip tooltipTitle="I am a tooltip title">
        Link Button
      </Button.Link>
    </Space>
    <Divider>Disabled</Divider>
    <Space>
      <Button showTooltip disabled tooltipTitle="I am a tooltip title">
        Button
      </Button>
      <Button.Check showTooltip disabled tooltipTitle="I am a tooltip title">
        Check Button
      </Button.Check>
      <Button.Link showTooltip disabled tooltipTitle="I am a tooltip title">
        Link Button
      </Button.Link>
    </Space>
  </Space>
);
