module.exports = {
    url: process.env.URL || "http://localhost:8080",
    domain: "https://getrich.design",
    name: "GetRich",
    env: process.env.ENVIRONMENT || "local",

    twitterHandle: "@goblamedesign",
    twitterLink: "https://twitter.com/blamedesign",
    githubLink: "https://github.com/stillingdesign/blame.design/",
    linkedinLink: "https://www.linkedin.com/company/blame/",
    instagramLink: "https://www.instagram.com/blame_design",

    // Current year
    currentYear() {
        const today = new Date();
        return today.getFullYear();
    }
};