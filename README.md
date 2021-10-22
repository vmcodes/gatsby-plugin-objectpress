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
     */
    {
      resolve: `gatsby-plugin-objectpress`,
      options: {
        production: true,
        appSecret: `XtMsuJ+nr7PJ4wqxWjRUhqwbg7BuCqHOm2Q5kP5Xq4M=`,
        userSecret: `gcMeOyAu8TOYcDBBFkbNFS4tiTubU0ow+6IEoGcl3gQ=`,
      },
    },
  ],
};
```
