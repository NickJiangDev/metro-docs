import type { PaginationProps } from '@metro/components';
import { Pagination } from '@metro/components';
import React from 'react';

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (
  current,
  pageSize,
) => {
  console.log(current, pageSize);
};

const App: React.FC = () => (
  <>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    <br />
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
      disabled
    />
  </>
);

export default App;
