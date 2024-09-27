const pluginWebc = require("@11ty/eleventy-plugin-webc");
const htmlmin = require("html-minifier-terser");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const mdIt = require("markdown-it");
const mdAnchor = require('markdown-it-anchor');
const slugify = require("slugify");

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

    // Anchor links on markdown titles
    const linkAfterHeader = mdAnchor.permalink.linkAfterHeader({
        class: "anchor",
        style: "aria-labelledby",
    });
    const mdAnchorOptions = {
        level: [1, 2, 3],
        tabIndex: false,
        slugify: (str) => slugify(str, {
            lower: true,
            strict: true,
            remove: /["1234567890]/g,
        })
    }
    const md = new mdIt({
        html: true,
        linkify: true,
        typographer: true,
    });
    md.use(mdAnchor, mdAnchorOptions);
    eleventyConfig.setLibrary('md', md);
    eleventyConfig.addFilter('markdown', (value) => {
        return md.render(value);
    });

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