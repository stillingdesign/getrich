module.exports = (eleventyConfig) => {
    eleventyConfig.addWatchTarget("dist/assets/css/main.css");
    eleventyConfig.addPassthroughCopy({"src/assets/images": "assets/images"});
    eleventyConfig.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "src/_includes",
            data: "src/_data",
        }
    }
};