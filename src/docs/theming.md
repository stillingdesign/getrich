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
        -   title: "Customize color"
            href: "#customize-color"
            tag: "h3"
        -   title: "Usage example"
            href: "#usage-example"
            tag: "h3"
    -   title: "Buttons"
        href: "#buttons"
        tag: "h2"
        subitems:
        -   title: "Button variants"
            href: "#button-variants"
            tag: "h3"
        -   title: "Button sizes"
            href: "#button-sizes"
            tag: "h3"
        -   title: "Customize buttons"
            href: "#customize-buttons"
            tag: "h3"
    -   title: "Links"
        href: "#links"
        tag: "h2"
        subitems:
        -   title: "Link variants"
            href: "#link-variants"
            tag: "h3"
        -   title: "Link sizes"
            href: "#link-sizes"
            tag: "h3"
        -   title: "Customize links"
            href: "#customize-links"
            tag: "h3"
---

# Theming your website

<p class="intro text-balance">How to change the foundational elements of Getrich to make it unique to your brand.</p>

---

## Overview

At a foundational level, most SaaS marketing sites are differentiated by very few design decisions. Namely, they have subtle differences in their color palette and button/link styling. Below, you'll see how to customize these with Getrich.

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

<div class="relative flex w-full p-32 bg-shadow aspect-1/1 text-12/100 mt-24 mb-48 rounded-6 border border-headline/10">
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
                    <div class="hidden sm:block rounded-4 px-6 pt-4 pb-3 ml-16 bg-accent/10 border border-accent/10 text-accent text-12/100 mb-10">
                        Accent
                    </div>
                    <div class="hidden sm:block text-headline text-16/110 px-16 pb-6 text-balance">
                        Headline using headline.
                    </div>
                    <div class="hidden sm:block text-content text-14/150 px-16 pb-6 text-pretty">
                        Subcopy and a <span class="text-link hover:text-linkhover cursor-pointer">faux link</span> that uses the color content and link.
                    </div>
                    <div class="hidden sm:block text-detail text-12/150 px-16 text-balance pb-16">
                        Note: this note is using the detail color.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

---

## Buttons

Rather than tying the the styling of buttons and links to `<button>` or `<a>` tags, Getrich approaches this type of formatting as a set of utility classes that can be used on any element.

<md-code>
    Button example
</md-code>

<md-viewer class="flex-col gap-16 py-24">
    <button class="button size-sm">
        A button tag
    </button>
    <a href="#" class="button size-sm">
        An anchor tag
    </a>
</md-viewer>

```html
<button class="button size-sm">
    A button tag
</button>
<a href="#" class="button size-sm">
    An anchor tag
</a>
```

### Button variants

By default, the `.button` utility class will be displayed in the style above. This can be overwritten by adding a `.variant-{name}` to the element, too.

<md-code>
    Button variants
</md-code>

<md-viewer class="flex-col gap-16 min-h-256">
    <a href="#" class="button size-sm min-w-80">
        Default
    </a>
    <a href="#" class="button variant-primary size-sm min-w-80">
        Primary
    </a>
    <a href="#" class="button variant-outline size-sm min-w-80">
        Outline
    </a>
    <a href="#" class="button variant-ghost size-sm min-w-80">
        Ghost
    </a>
</md-viewer>

```html
<a href="#" class="button size-sm min-w-80">
    Default
</a>
<a href="#" class="button variant-primary size-sm min-w-80">
    Primary
</a>
<a href="#" class="button variant-outline size-sm min-w-80">
    Outline
</a>
<a href="#" class="button variant-ghost size-sm min-w-80">
    Ghost
</a>
```

### Button sizes

Similar to variants, button sizing can be modified by adding a size utility class. The default sizes available are listed below.

<md-code>
    Button sizes
</md-code>

<md-viewer class="flex-col gap-16 py-24">
    <a href="#" class="button size-xl">
        size-xl
    </a>
    <a href="#" class="button size-lg">
        size-lg
    </a>
    <a href="#" class="button size-md">
        size-md
    </a>
    <a href="#" class="button size-sm">
        size-sm
    </a>
    <a href="#" class="button size-xs">
        size-xs
    </a>
    <a href="#" class="button size-2xs">
        size-2xs
    </a>
    <a href="#" class="button size-3xs">
        size-3xs
    </a>
</md-viewer>

```html
<a href="#" class="button size-xl">
    size-xl
</a>
```

### Customize buttons

`src/assets/css/components/_link-btn.css` is the place to go to customize button styles within Getrich. There, you can customize the foundational styles, variants, and sizing.

---

## Links

Just like buttons, links can be easily styled with utility classes.

<md-code>
    Link example
</md-code>

<md-viewer class="flex-col gap-16 pt-24 pb-28">
    <a href="#" class="link">
        Here's a link
    </a>
</md-viewer>

```html
<a href="#" class="link">
    Here's a link
</a>
```

### Link variants

By default, the `.link` utility class will be displayed in the style above. This styling can be modified by by adding one of the `.variant-{name}` styles below to the element, too.

<md-code>
    Link variants
</md-code>

<md-viewer class="flex-col gap-16 min-h-256">
    <a href="#" class="link">
        Default
    </a>
    <a href="#" class="link variant-text">
        Text
    </a>
    <div class="w-full bg-headline/80 pt-4 pb-8 flex justify-center max-w-192">
        <a href="#" class="link variant-theme">
            Theme
        </a>
    </div>
</md-viewer>

```html
<a href="#" class="link">
    Default
</a>
<a href="#" class="link variant-text">
    Text
</a>
<div class="w-full bg-headline/80 pt-4 pb-8 flex justify-center max-w-192">
    <a href="#" class="link variant-theme">
        Theme
    </a>
</div>
```

### Link sizes

Link sizing is based on `font-size` and `line-height`. The reason for this is to make links work inline, alongside other content.

<md-code>
    Link sizing
</md-code>

<md-viewer class="flex-col gap-24 pt-24 pb-32">
    <a href="#" class="link">
        Uses inherited font-size
    </a>
    <a href="#" class="link text-14/140">
        Uses 14px font + 140% line height
    </a>
    <a href="#" class="link text-12/160">
        Uses 12px font + 160% line height
    </a>
</md-viewer>

```html
<a href="#" class="link">
    Uses inherited font-size
</a>
<a href="#" class="link text-14/140">
    Uses 14px font + 140% line height
</a>
<a href="#" class="link text-12/160">
    Uses 12px font + 160% line height
</a>
```

### Customize links

`src/assets/css/components/_link-txt.css` is the place to go to customize link styles within Getrich. There, you can customize the foundational styles and variants.

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