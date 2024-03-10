module.exports = {
    extends: ["eslint:recommended"],
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    ignorePatterns: [
        // Ignore dotfiles
        '.*.js',
        'node_modules/',
        'dist/'
    ],
    // overrides: [
    //     {
    //         files: ["**/__tests__/**/*"],
    //         env: {
    //             jest: true,
    //         },
    //     },
    // ],
};