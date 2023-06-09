module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react-hooks"],
    rules: {
        quotes: ["error", "double"],
        // indent: ["error", 4, { SwitchCase: 1,
        //     "flatTernaryExpressions": true }],
        semi: ["error", "always"],
        "no-unused-vars": ["warn"],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        "react/prop-types": 0,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
