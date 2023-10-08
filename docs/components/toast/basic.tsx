import { Space, ToastContainer } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space>
    <Space direction="vertical">
      <ToastContainer
        type="info"
        message="“Here's a massage of the task."
        withClose
      />
      <ToastContainer
        type="warning"
        message="“Here's a massage of the task."
        withClose
      />
      <ToastContainer
        type="error"
        message="“Here's a massage of the task."
        withClose
      />
      <ToastContainer
        type="success"
        message="“Here's a massage of the task."
        withClose
      />
      <ToastContainer
        type="loading"
        message="“Here's a massage of the task."
        withClose
      />
    </Space>
    <Space direction="vertical">
      <ToastContainer
        type="info"
        message="“Here's a massage of the task."
        buttonText="View"
        withArrow
      />
      <ToastContainer
        type="warning"
        message="“Here's a massage of the task."
        buttonText="View"
        withArrow
      />
      <ToastContainer
        type="error"
        message="“Here's a massage of the task."
        buttonText="View"
        withArrow
      />
      <ToastContainer
        type="success"
        message="“Here's a massage of the task."
        buttonText="View"
        withArrow
      />
      <ToastContainer
        type="loading"
        message="“Here's a massage of the task."
        buttonText="View"
        withArrow
      />
    </Space>
  </Space>
);

export default App;
