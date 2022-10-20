// based on https://allandeutsch.com/notes/sveltekit-storybook-setup/

const fs = require('fs');
const util = require('util');
const readFile = (fileName) => util.promisify(fs.readFile)(fileName, 'utf8');

const path = require('path');

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
      $lib: path.resolve('./src/lib'),
    };

    config.define = {
      ...(config.define || {}),
      "process.env.__readme__": JSON.stringify(await readFile('README.md'))
    };

    return config;
  },
};
