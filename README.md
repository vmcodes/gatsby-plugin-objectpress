# gatsby-plugin-objectpress

### Getting Started

npm i gatsby-plugin-objectpress

### [Demo](https://gatsby.objectpress.io)

### Basic Usage

```javascript
module.exports = {
  plugins: [
    // loads the source-plugin and adds credentials
    {
      resolve: `gatsby-plugin-objectpress`,
      options: {
        appSecret: `XtMsuJ+nr7PJ4wqxWjRUhqwbg7BuCqHOm2Q5kP5Xq4M=`,
        userSecret: `gcMeOyAu8TOYcDBBFkbNFS4tiTubU0ow+6IEoGcl3gQ=`,
      },
    },
  ],
};
```
