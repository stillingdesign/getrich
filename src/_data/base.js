module.exports = {
    url: process.env.URL || "http://localhost:8080",
    domain: "https://getrich.design",
    name: "GetRich",
    env: process.env.ENVIRONMENT || "local",

    twitterHandle: "@mikestilling",
    twitterLink: "https://twitter.com/mikestilling",
    githubLink: "https://github.com/stillingdesign/getrich/",
    linkedinLink: "https://www.linkedin.com/in/mikestilling/",
    instagramLink: "https://www.instagram.com/mikestilling/",

    // Current year
    currentYear() {
        const today = new Date();
        return today.getFullYear();
    }
};