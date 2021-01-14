import vue from '@vitejs/plugin-vue';
import path from 'path';

export default {
  plugins: [vue()],
  alias: {
    '@': path.resolve(__dirname, '/src'),
  },
};
