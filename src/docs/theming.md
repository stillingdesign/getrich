---
layout: "docs.webc"
title: "Theming"
seoTitle: "GetRich: Theming"
seoDesc: "Get started with Getrich, the opinionated boilerplate for your SaaS brand."
ogTitle: "GetRich: Theming"
ogDesc: "Get started with Getrich, the opinionated boilerplate for your SaaS brand."
ogImage: "/assets/images/og/default.jpg"
ogImageAlt: ""
changefreq: "daily"
toc:
    -   title: "Introduction"
        href: "#theming-your-website"
        tag: "h1"
    -   title: "Color palette"
        href: "#color-palette"
        tag: "h2"
        subitems:
        -   title: "Background colors"
            href: "#background-colors"
            tag: "h3"
        -   title: "Text colors"
            href: "#text-colors"
            tag: "h3"
        -   title: "Other colors"
            href: "#other-colors"
            tag: "h3"
        -   title: "Customize colors"
            href: "#customize-colors"
            tag: "h3"
        -   title: "Usage example"
            href: "#usage-example"
            tag: "h3"
    -   title: "Buttons and links"
        href: "#buttons-and-links"
        tag: "h2"
---

# Theming your website

<p class="intro text-balance">How to change the foundational elements of Getrich to make it unique to your brand.</p>

---

## Color palette

Getrich uses [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) set within `src/assets/css/main.css` to define color across the site. Mainly, the colors used are part of a grayscale. By default the grayscale is monochromatic and untinted.

When looking at `main.css`, you'll notice that there are a seperate set of color values for light and dark mode. They are duplicated to support user overrides of their operating system's [preferred theme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

Once set and duplicated appropriately in `main.css`, these values need to be carried into `tailwind.config.js` to be utlized as utility classes. If you know a better way to do this with less duplication, please let me know!

### Background colors

Similar to creating a composition with a light source, elements higher in the stacking order utilize lighter colors. Getrich uses this notion as a naming convention for background colors.

<div class="relative flex flex-col gap-8 w-full mt-24 mb-16 text-14/100">
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-shadow rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Shadow
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-background rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Background
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-middleground rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Middleground
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-foreground rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Foreground
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-highlight rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Highlight
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
</div>

<md-block class="text-balance mb-48">
    <span class="font-semibold text-headline">Light / dark mode:</span> to preview the various light/dark mode values, click the toggle in the footer of this page
</md-block>

### Text colors

Most sites consistently utilize a few text colors. Getrich defines and names these contextually as they are typically used.

<div class="relative flex flex-col gap-8 w-full mt-24 mb-48 text-14/100">
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-headline rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Headline
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-content rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Content
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-detail rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Detail
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-link rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Link
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-linkhover rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Link hover
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
</div>

### Other colors

By default, Getrich supplies a few additional colors for things like branding, actions, and syntax highlighting.

<div class="relative flex flex-col gap-8 w-full mt-24 mb-48 text-14/100">
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-primary rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Primary
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-accent rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Accent
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-error rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Error
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-caution rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Caution
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-black rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Black
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-white rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                White
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-theme rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Theme
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div data-color class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div data-color-ref class="w-20 h-20 bg-inverse rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div data-color-name class="text-headline">
                Inverse
            </div>
        </div>
        <div data-color-value class="font-mono text-12/100">
            rgb(00,00,00)
        </div>
    </div>
    <div class="flex items-center justify-between pl-10 pr-12 py-8 w-full bg-middleground border border-headline/4 rounded-6">
        <div class="flex items-center gap-8">
            <div class="w-20 h-20 bg-current rounded-2" style="box-shadow: 0 0 0 1px rgba(var(--color-headline),0.04);"></div>
            <div class="text-headline">
                Current
            </div>
        </div>
        <div class="font-mono text-12/100">
            currentColor
        </div>
    </div>
</div>

### Customize color

To customize colors in Getrich replace the CSS variable RGB values in `main.css`. Since these will be used as utility classes, the alpha can be set flexibly later on.

<md-code>
    main.css
</md-code>

``` css
:root {
    /* Replace our values! */
    --color-shadow: 230, 230, 230;
    --color-background: 237, 237, 237;
    --color-middleground: 245, 245, 245;
    --color-foreground: 250, 250, 250;
    --color-highlight: 255, 255, 255;
    ...
    @media (prefers-color-scheme: dark) {
        /* Replace our values! */
        --color-shadow: 0, 0, 0;
        --color-background: 13, 13, 13;
        --color-middleground: 20, 20, 20;
        --color-foreground: 26, 26, 26;
        --color-highlight: 31, 31, 31;
        ...
    }
}
```

To add new colors, create a new CSS variable in `main.css` and carry that over to `tailwind.config.js`. When poking around in those files, the patterns should be easy to understand.

<md-code>
    main.css
</md-code>

``` css
:root {
    --color-new: 255, 255, 255;
    
    /* OS set dark mode */
    @media (prefers-color-scheme: dark) {
        --color-new: 0, 0, 0;
    }

    /* User set light mode */ 
    :root[color-scheme="light"] {
        --color-new: 255, 255, 255;
    }

    /* User set dark mode */ 
    :root[color-scheme="dark"] {
        --color-new: 0, 0, 0;
    }
}
```

<md-code>
    tailwind.config.js
</md-code>

``` js
colors: {
    shadow: 'rgba(var(--color-shadow), <alpha-value>)',
    background: 'rgba(var(--color-background), <alpha-value>)',
    middleground: 'rgba(var(--color-middleground), <alpha-value>)',
    foreground: 'rgba(var(--color-foreground), <alpha-value>)',
    highlight: 'rgba(var(--color-highlight), <alpha-value>)',
    new: 'rgba(var(--color-new), <alpha-value>)'
},
```

### Usage example

To see how this works, check out the example below:

<div class="relative flex w-full p-32 bg-shadow aspect-1/1 text-12/100 mt-24 mb-64 rounded-6 border border-headline/10">
    <div class="absolute top-0 left-0 w-full px-12 py-10 flex justify-between items-center">
        <div>
            Shadow
        </div>
    </div>
    <div class="relative w-full h-full p-32 bg-background">
        <div class="absolute top-0 left-0 w-full px-12 py-10 flex justify-between items-center">
            <div>
                Background
            </div>
        </div>
        <div class="relative w-full h-full p-32 bg-middleground">
            <div class="absolute top-0 left-0 w-full px-12 py-10 flex justify-between items-center">
                <div>
                    Middleground
                </div>
            </div>
            <div class="relative w-full h-full p-32 bg-foreground">
                <div class="absolute top-0 left-0 w-full px-12 py-10 flex justify-between items-center">
                    <div>
                        Foreground
                    </div>
                </div>
                <div class="relative w-full h-full bg-highlight flex flex-col items-start justify-end">
                    <div class="absolute top-0 left-0 w-full px-12 py-10 flex justify-between items-center">
                        <div>
                            Highlight
                        </div>
                    </div>
                    <div class="rounded-4 px-6 pt-4 pb-3 ml-16 bg-accent/10 border border-accent/10 text-accent text-12/100 mb-10">
                        Accent
                    </div>
                    <div class="text-headline text-16/110 px-16 pb-6 text-balance">
                        Headline using headline.
                    </div>
                    <div class="text-content text-14/150 px-16 pb-6 text-pretty">
                        Subcopy and a <span class="text-link hover:text-linkhover cursor-pointer">faux link</span> that uses the color content and link.
                    </div>
                    <div class="text-detail text-12/150 px-16 text-balance pb-16">
                        Note: this note is using the detail color.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

## Buttons and links

Rather than tying the the styling of buttons and links to `<button>` or `<a>` tags, Getrich approaches this type of formatting as a set of utility classes that can be used on any element.

<md-code>
    Example
</md-code>

<div class="md-viewer relative flex items-center justify-center min-h-144 bg-middleground border-x border-t border-headline/10" style="background-image: linear-gradient(90deg, rgba(var(--color-headline), 0.04) 1px,transparent 0),linear-gradient(180deg,rgba(var(--color-headline), 0.04) 1px,transparent 0); background-size: 1rem 1rem; background-position: center;">
    <div class="button variant-primary size-sm">
        This div looks like a button
    </div>
</div>

```html
<div class="button variant-primary size-sm">
    This div looks like a button
</div>
```

Out of the box, Getrich provides two components for links specifically, `<link-txt>` and `<link-btn>`. These will have default button or link styling applied to an `<a>` tag.

<script>
    function setColorValues() {
        const colors = document.querySelectorAll('[data-color]');
        colors.forEach(color => {
            const name = color.querySelector('[data-color-name]').textContent.trim().replace(/\s+/g, '').toLowerCase();
            const refEl = color.querySelector('[data-color-ref]');
            const valueEl = color.querySelector('[data-color-value]');
            const value = getComputedStyle(refEl).getPropertyValue(`background-color`).trim();
            valueEl.textContent = value;
        });
    }
    window.addEventListener('load', () => { setColorValues(); });
    document.addEventListener('change', () => { setColorValues(); });
</script>