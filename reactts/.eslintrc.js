module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
	"globals": {
		"read": false,
		"readbuffer": false,
		"scriptArgs": false,
		"arguments": false,
		"quit": false,
		"printErr": false,
	},
    "rules": {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-empty-function": "off",
        "no-global-assign": "off",
        "no-constant-condition": ["error", { "checkLoops": false }],
        "getter-return": "off",
        "no-fallthrough": "off",
    }
}
