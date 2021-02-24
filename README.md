# HCI_Seminar

npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components
+extention vscode-styled-components

npm install react-router-dom

npm install emailjs-com --save

npm add react-icons

npm i gatsby-plugin-anchor-links

npm i react-responsive

npm install dotenv

npm install gatsby-transformer-json

## gatsby.config.js editirat

```
plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/data/videos`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
```

npm install gatsby-source-contentful

## gatsby.config.js editirat

```
{
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_KEY,
    downloadLocal: true,
  }
}
```