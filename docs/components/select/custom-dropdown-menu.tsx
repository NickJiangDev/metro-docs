import type { InputRef } from '@metro/components';
import { Button, Divider, Input, Select, Space } from '@metro/components';
import { Add } from '@metro/icons/dist/esm/react';
import React, { useRef, useState } from 'react';

let index = 0;

const App: React.FC = () => {
  const [items, setItems] = useState(['jack', 'lucy']);
  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div>
      <Select
        style={{ width: 300 }}
        placeholder="custom dropdown render"
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider style={{ margin: '8px 0' }} />
            <Space style={{ padding: '0 8px 4px' }}>
              <Input
                placeholder="Please enter item"
                ref={inputRef}
                value={name}
                onChange={onNameChange}
              />
              <Button.Link icon={<Add />} onClick={addItem}>
                Add
              </Button.Link>
            </Space>
          </>
        )}
        options={items.map((item) => ({ label: item, value: item }))}
      />
    </div>
  );
};

export default App;
