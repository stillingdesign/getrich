---
layout: "docs.webc"
title: "Quick start"
seoTitle: "GetRich: Documentation"
seoDesc: "Get started with Getrich, the opinionated boilerplate for your SaaS brand."
ogTitle: "GetRich: Documentation"
ogDesc: "Get started with Getrich, the opinionated boilerplate for your SaaS brand."
ogImage: "/assets/images/og/default.jpg"
ogImageAlt: ""
changefreq: "daily"
toc:
    -   title: "Introduction"
        href: "#getrich-quickstart-guide"
        tag: "h1"
    -   title: "Get the template"
        href: "#get-the-template"
        tag: "h2"
    -   title: "Run the code"
        href: "#run-the-code"
        tag: "h2"
    -   title: "Build your site"
        href: "#build-your-site"
        tag: "h2"
---

# Getrich quickstart guide

<p class="intro">Getrich is opinionated boilerplate for your SaaS brand. Bypass the basics and start growing your business.</p>

---

## Get the template

To get the template, click the button below or visit the [GitHub Page](https://github.com/stillingdesign/getrich) and click "Use this template" in the top left corner. This creates a duplicate of this repository within your own GitHub account.

<div class="flex flex-col justify-start md:flex-row md:items-center gap-16 mt-24">
    <link-btn href="https://github.com/new?template_name=getrich&template_owner=stillingdesign" class="variant-primary size-md" target="_blank">
        Use the template
        <github slot="left" class="-mt-2 mr-4"></github>
    </link-btn>
    <div class="relative w-full flex items-center justify-center py-10 px-16 bg-middleground rounded-6 border border-headline/10 text-14/140">
        <strong>Not on GitHub?&nbsp;</strong> <link-txt class="variant-text" href="https://github.com/stillingdesign/getrich/archive/refs/heads/main.zip" target="_blank">Download the ZIP instead.</link-txt>
    </div>
</div>

---

## Run the code

After getting the code onto your machine and opening it within your code editor, simply run an `npm i` to install dependencies. Follow that up with `npm start` to fire up the <link-txt class="variant-text" href="https://www.11ty.dev/docs/dev-server/" target="_blank">11ty Dev Server.</link-txt>

<md-block>
    <strong>Confused?</strong> Check out the <link-txt class="variant-text" href="/docs/how-it-works/">contributor guide.</link-txt> Here, Mike walks through how to get setup and start working on this website (with videos).
</md-block>

---

## Build your site

To run a production build of your new site type `npm run build` into your terminal and click enter. By default, the HTML, CSS, and Javascript will be minified.

---

## Background

This approach is purposefully simple. After working on a handful of SaaS marketing websites, it seems the biggest hang-up is adding complexity to provide ways for non-technical, "back-end" users to interact with the code (CMS, block-building, etc).

Getrich instead aims to make a marketing website codebase _simple enough_ that any member of the team can dive in and make updates while simultaneously being performant and fully customizeable.

Here, my hope is that the code is simple enough for anyone on the team to work with. More to come, but I hope to build docs to help any team member get up to speed here.

<md-code>
    Page.js
</md-code>

``` js
const test = document.querySelector('[data-test]');
test.addEventListener('click', function() {
    test.classlist.add('red');
})
// select all
let test = document.querySelector('[data-test]');
test.addEventListener('click', () => {
    if(test === true) {
        console.log('hello world');
    }
    y: Math.random() * canvas.width,
    const tmln = gsap.timeline();
        tmln
            .to(test, {y:0, duration:1}, 0)
});
```

``` css
.test {
    color: red;
}

#test {
    color: green !important;
}

:root {
    --variable: 24, 38, 95;
}
```

``` html
<div class="container">
    <h1 id="title">
        Hello world
    </h1>
</div>
```