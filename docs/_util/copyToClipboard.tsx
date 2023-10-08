import { toastApi } from '@metro/components';

const copyToClipboard = (text: string, successText = '已复制到粘贴板') => {
  const elem = document.createElement('textarea');
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand('copy');
  document.body.removeChild(elem);
  toastApi.success(successText);
};

export default copyToClipboard;
