---
layout: "docs.webc"
seoTitle: "GetRich: Documentation"
seoDesc: "Get started with Getrich, the opinionated boilerplate for your SaaS brand."
ogTitle: "GetRich: Documentation"
ogDesc: "Get started with Getrich, the opinionated boilerplate for your SaaS brand."
ogImage: "/assets/images/og/default.jpg"
ogImageAlt: ""
docsOrder: 0
changefreq: daily
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
    <strong>Confused?</strong> Watch the video below for a full step-by-step. It will walk you through the basics of GitHub and NodeJS/NPM.
</md-block>

---

## Build your site

To run a production build of your new site type `npm run build` into your terminal and click enter. By default, the HTML, CSS, and Javascript will be minified.