import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: '@/pages/Home' },
    { path: '/about', component: '@/pages/About' },
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  fastRefresh: {},
});
