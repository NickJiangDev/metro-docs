import { Anchor } from '@metro/components';
import React from 'react';

const onChange = (link: string) => {
  console.log('Anchor:OnChange', link);
};

const App: React.FC = () => (
  <Anchor
    affix={false}
    onChange={onChange}
    items={[
      {
        key: '1',
        href: '#docs-components-anchor-demo-basic',
        title: 'Static demo',
      },
      {
        key: '2',
        href: '#docs-components-anchor-demo-onclick',
        title: 'Custom onClick',
      },
      {
        key: '2-1',
        href: '#docs-components-anchor-demo-customizehighlight',
        title: 'Custom customizeHighlight',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
        ],
      },
    ]}
  />
);

export default App;
