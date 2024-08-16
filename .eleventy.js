module.exports = (eleventyConfig) => {
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "src/_includes",
            data: "src/_data",
        }
    }
};