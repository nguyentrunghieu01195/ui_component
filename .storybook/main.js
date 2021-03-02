module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    // require.context('../src/stories', true, /\.stories\.js$/),
    // require.context('../src/stories', true, /\.stories\.jsx$/),
    // require.context('../src/stories', true, /\.stories\.ts$/),
    // require.context('../src/stories', true, /\.stories\.tsx$/),
    // require.context('../src/stories', true, /\.stories\.mdx$/)
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}