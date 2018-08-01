import { configure } from '@storybook/react';
const req = require.context('../stories', true, /.stories.tsx$/); // automatically import all files ending in *.stories.tsx
function loadStories() { req.keys().forEach(filename => req(filename)); }
configure(loadStories, module);
