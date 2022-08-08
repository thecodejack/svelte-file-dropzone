// based on https://allandeutsch.com/notes/sveltekit-storybook-setup/

const fs = require('fs');
const util = require('util');
const readFile = (fileName) => util.promisify(fs.readFile)(fileName, 'utf8');

const path = require('path');

// based on https://stackoverflow.com/a/22466191/2968864
/** @param {string} str */
const toJSString = (str) => "'" + str.replace(/[\\$'"`]/g, "\\$&").split(/\r\n|\n/).join('\\n') + "'";

module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-notes/register",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType: _configType }) {
    config.resolve.alias = {
      $components: path.resolve('./src/components'),
      $routes: path.resolve('./src/routes'),
      $lib: path.resolve('./src/lib'),
    };

    config.define = {
      ...(config.define || {}),
      __readme__: toJSString(await readFile('README.md'))
    };

    return config;
  },
};
