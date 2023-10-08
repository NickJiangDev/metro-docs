import { Radio, RadioGroupProps } from '@metro/components';

const Group = Radio.Group;
const themeOptions = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

const ThemeRadio = (props: RadioGroupProps) => {
  const { value = 'light', ...restProps } = props;
  return (
    <Group
      value={value}
      {...restProps}
      options={themeOptions}
      optionType="button"
    />
  );
};

export default ThemeRadio;
