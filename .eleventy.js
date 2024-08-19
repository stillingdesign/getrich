module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({"src/assets/images": "assets/images"});
    eleventyConfig.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
    eleventyConfig.setServerOptions({ domDiff: false, })
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_components",
            layouts: "_layouts",
            data: "_data",
        }
    }
};