// packages/button/vite.config.ts
import { generateVueConfig } from '../build/scripts';

export default generateVueConfig(
  {
    presetSkyuiOptions: {
      include: ['button'],
    },
  },
);
