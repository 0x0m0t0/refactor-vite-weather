// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  define: {
    'process.env': {},
  },

  base: './',
};
