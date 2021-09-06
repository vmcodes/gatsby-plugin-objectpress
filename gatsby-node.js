const axios = require("axios");
/**
 * ============================================================================
 * Source and cache nodes from the API
 * ============================================================================
 */
const POST_NODE_TYPE = `Post`;

exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId },
  pluginOptions
) => {
  const { createNode } = actions;

  // Object Press credentials
  const creds = {
    scan: `apps`,
    appSecret: pluginOptions.appSecret,
    userSecret: pluginOptions.userSecret,
  };

  // call the external API endpoint to get all posts
  const response = await axios.post(`https://v2.objectpress.io/content`, creds);

  // gather the response data
  const content = await response.data;

  // loop through data and create Gatsby nodes
  content.body.forEach((post) =>
    createNode({
      id: createNodeId(`${POST_NODE_TYPE}-${post.title}`),
      ...post,
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post),
      },
    })
  );
  return;
};