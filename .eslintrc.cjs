module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
		React: "writable",
	},
	ignorePatterns: ["build"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 2021,
		sourceType: "module",
		project: "./tsconfig.json",
	},
	plugins: ["@typescript-eslint", "react"],
	rules: {
		"react/prop-types": "off",
		"react/display-name": "off",
	},
	settings: { react: { version: "detect" } },
};