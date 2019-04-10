module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: require.resolve(`./src/utils/typography`)
      }
    }
  ]
};
