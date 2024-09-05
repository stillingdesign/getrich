const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = (eleventyConfig) => {
    eleventyConfig.setServerOptions({ watch: ["dist/**/*.css"] });
    eleventyConfig.addPlugin(pluginWebc, { components: "src/_components/**/*.webc", });
    eleventyConfig.addPassthroughCopy({"src/assets/images": "assets/images"});
    eleventyConfig.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
    eleventyConfig.addPassthroughCopy('src/manifest.webmanifest');
    return {
        htmlTemplateEngine: "webc",
        dir: {
            input: "src",
            output: "dist",
            includes: "_components",
            layouts: "_layouts",
            data: "_data",
        }
    }
};