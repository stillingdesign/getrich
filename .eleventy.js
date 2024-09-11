const pluginWebc = require("@11ty/eleventy-plugin-webc");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier-terser");

module.exports = (eleventyConfig) => {
    
    eleventyConfig.setServerOptions({ watch: ["dist/**/*.css"] });
    eleventyConfig.addPlugin(pluginWebc, { components: "src/_components/**/*.webc"});
    eleventyConfig.addPassthroughCopy({"src/assets/images": "assets/images"});
    eleventyConfig.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
    eleventyConfig.addPassthroughCopy('src/manifest.webmanifest');

    // Minify HTML output
    eleventyConfig.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
			});
			return minified;
		}
		return content;
	});

    // Syntax Highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

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