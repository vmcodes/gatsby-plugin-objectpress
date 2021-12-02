# gatsby-plugin-objectpress

### Getting Started

npm i gatsby-plugin-objectpress

### [Demo](https://gatsby.objectpress.io)

### Basic Usage

```javascript
module.exports = {
  plugins: [
    /*  Loads the source-plugin and adds credentials.
     *  Production is enabled as 'true' by default, but this can be modified explicity
     *  to additionally display pending post by setting production to 'false'.
     *  Sort is set to true and publishDesc (publishAt descending).
     *  Options include: publishDesc, publishAsc, titleDesc, and titleAsc.
     */
    {
      resolve: `gatsby-plugin-objectpress`,
      options: {
        production: true,
        sort: true,
        sortType: "titleAsc",
        appSecret: `r4FHszB0vG4cx/RyxhkzqcJkqB5H/3wF31AVhjv0xkM=`,
        userSecret: `D7m5yEAJwqvQIq50xfUGBU8VZH3AXNy1eJJqBXwy1tE=`,
      },
    },
  ],
};
```
