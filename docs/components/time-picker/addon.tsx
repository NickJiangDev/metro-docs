import { Button, TimePicker } from '@metro/components';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button size="small" type="primary" onClick={() => setOpen(false)}>
          OK
        </Button>
      )}
    />
  );
};

export default App;
