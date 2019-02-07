const { DateTime } = require("luxon");
const { buildSrc, buildDest } = require('./paths');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/_assets/img");

  return {
    templateFormats: ["html", "njk", "md"],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: buildSrc,
      output: buildDest,
      data: "_data",
      includes: "_includes"
    },
  };
};
