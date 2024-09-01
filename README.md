# Get Rich
TLDR; A boilerplate design sytem for nice SaaS marketing websites using [11ty](https://www.11ty.dev/), [Tailwind](https://tailwindcss.com/), and [WebC](https://www.11ty.dev/docs/languages/webc/).

`!! Work is in progress !!`

It may not be the flashiest stack, but it's fast, simple, iteratable, and, _dare I say,_ scalable. Most folks on the team, _even marketers and designers,_ should be able to work directly in this. I've used a very similar setup at a few startups—design and dev velocity has never been a hangup. Miss me with that _ish_ on utility classes limiting creativity, too. Chances are, your SaaS site is mostly the same as every other, plus/minus a few colors or gradients.

Most _good_ SaaS brands are a unique color (usually somewhere between blue and purple) applied to a button (`<a>`) with a subtley tinted grayscale. Their containers max-out somewhere between 1024-1280px. If they don't use [Inter](https://rsms.me/inter/), they use something indistinguishable from it by _most people_. While they may have a clever thing or two, the fundamentals are nearly identicle. Don't believe me? Just look at [Vercel](https://vercel.com), [Linear](https://linear.app), [Frame](https://frame.io), [Raycast](https://www.raycast.com), and [Stripe](https://stripe.com).

Having seen complete messes of marketing and analytics integrations at _most_ companies I've been at, I highly recommend keeping things simple here, too. **Use markdown, not a CMS.** Quite frankly, it's easier to learn and manage _than Contentful_. For tracking, just **use [Fathom](https://usefathom.com) or [Plausible](https://plausible.io/).** You're not going to get _that much_ more out of something else—and we're all tired of seeing cookie consent banners before homepage content. While [Vercel](https://vercel.com) looks cooler, **[Netlify](https://www.netlify.com) makes [handling forms](https://www.netlify.com/platform/core/forms/) and [A/B testing](https://docs.netlify.com/site-deploys/split-testing/) a lot easier.**

**Once I get through the initial design of this, I'll create some getting started videos.** If you dive in before then, just update the color variables in `src/assets/main.css` and _(potentially)_ update your button styles in `src/assets/css/elements/_button.css`.

✌️