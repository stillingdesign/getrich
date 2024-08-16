module.exports = (eleventyConfig) => {
    eleventyConfig.addWatchTarget("dist/assets/css/main.css");
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            data: "_data",
        }
    }
};