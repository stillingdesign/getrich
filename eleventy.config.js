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

    // Define CSS variables from colors.json
    eleventyConfig.addFilter("defineColors", function(colors) {
        let constantColors = ':root {\n';
        let lightTheme = ':root[color-scheme="light"] {\n';
        let darkTheme = ':root[color-scheme="dark"] {\n';
        // Constant colors
        colors.forEach(item => {
            if (item.name && item.value) {
                constantColors += `  --color-${item.name}: ${item.value};\n`;
            }
        });
        // Theme-specific colors
        colors.forEach(item => {
            if (item.theme === 'light' && item.colors) {
                item.colors.forEach(color => {
                    lightTheme += `  --color-${color.name}: ${color.value};\n`;
                });
            }
            if (item.theme === 'dark' && item.colors) {
                item.colors.forEach(color => {
                    darkTheme += `  --color-${color.name}: ${color.value};\n`;
                });
            }
        });
        // End of the CSS blocks
        constantColors += '}\n';
        lightTheme += '}\n';
        darkTheme += '}\n';
        // Return combined CSS
        return constantColors + lightTheme + darkTheme;
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