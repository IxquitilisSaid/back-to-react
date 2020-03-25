const tailwindcss = require("tailwindcss");
module.exports = {
    plugins: [
        require("postcss-import"),
        require("precss"),
        tailwindcss("./tailwind.config.js"),
        require("autoprefixer")
    ]
};
