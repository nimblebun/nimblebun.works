const path = require('path');
const createMDX = require("@next/mdx")

const withMDX = createMDX({});

module.exports = withMDX({
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
    ],
  }
});
