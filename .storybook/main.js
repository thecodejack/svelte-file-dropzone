export default {
  stories: ["../stories/**/*.stories.js"],
  addons: [
    //"@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "@storybook/addon-storysource",
    // "@storybook/addon-notes/register",
    // "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
