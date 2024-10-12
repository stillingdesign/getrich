import pluginWebc from "@11ty/eleventy-plugin-webc";
import htmlmin from "html-minifier-terser";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { IdAttributePlugin } from "@11ty/eleventy";

export default function(eleventyConfig)  {
    
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

    // Anchor links on heading tags
    eleventyConfig.addPlugin(IdAttributePlugin, {
		selector: "h1,h2,h3",
		decodeEntities: true,
		slugify: eleventyConfig.getFilter("slugify"),
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