import { defineConfig } from '@rslib/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx';
import { pluginBabel } from '@rsbuild/plugin-babel';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  source: {
    entry: {
      index: ['./src/**']
    }
  },
  lib: [
    {
      bundle: true,
      dts: true,
      format: 'esm'
    }
  ],
  output: {
    target: 'web'
  },
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/
    }),
    pluginVue(),
    pluginVueJsx()
  ],
  tools: {
    rspack: {
      plugins: [
        require('unplugin-vue-macros/rspack')({
          // 覆盖插件选项
          vue: pluginVue(),
          vueJsx: pluginVueJsx()
        })
      ]
    }
  }
});
