module.exports = {
  siteMetadata: {
    title: 'Matt Meinzer',
    siteUrl: 'https://www.mattmeinzer.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: 'blog-posts',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-96186804-4',
        // Puts tracking script in the head instead of the body
        head: true,
        anonymize: false,
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.mattmeinzer.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.mattmeinzer.com',
        sitemap: 'https://www.mattmeinzer.com/sitemap.xml',
        policy: [
          { userAgent: '*', disallow: '/dailycast/' },
          { userAgent: '*', disallow: '/thank-you' },
          { userAgent: '*', allow: '/' },
        ],
      },
    },
  ],
}
