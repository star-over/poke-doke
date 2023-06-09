const { warn } = require("console");

module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  ignorePatterns: ["**/*.cjs", "next-env.d.ts", "*config.*", "package*.json", "*config.js", "./*.js"],
  extends: [
    'airbnb',
    'airbnb-typescript',
    "next",
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:array-func/all",
    "plugin:eslint-comments/recommended",
    "plugin:react/jsx-runtime",
    "plugin:tailwindcss/recommended",
    "plugin:import/typescript",
    "plugin:json/recommended-with-comments",
    "plugin:no-use-extend-native/recommended",
    "plugin:pii/recommended",
    "plugin:sonarjs/recommended",
    "plugin:switch-case/recommended",
    "plugin:unicorn/all",
    "plugin:xss/recommended",
    "plugin:markdown/recommended",
    "plugin:no-unsanitized/DOM",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    // "auto"
  ],
  plugins: [
    '@typescript-eslint',
    "array-func",
    "const-case",
    "html",
    "json",
    "markdown",
    "optimize-regex",
    "promise",
    "sonarjs",
    "switch-case",
    "no-constructor-bind",
    "no-secrets",
    "no-unsanitized",
    "pii",
    "security",
    "react-hooks",
    "unicorn",
    "xss",
    "tailwindcss"
  ],
  overrides: [
    {
        files: ["**/*.md"],
        processor: "markdown/markdown"
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    extraFileExtensions: [".json", ".md"],
    ecmaVersion: "latest",
    sourceType: 'module',
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.eslint.json",
  },
  settings: {
    "html/html-extensions": [".html"],
    "html/xml-extensions": [".html"],
    "mdx/code-blocks": true,
    "import/resolver": {
      typescript: { "alwaysTryTypes": true }
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react-hooks/rules-of-hooks":"off",
    "promise/always-return":"off",
    "eslint-comments/disable-enable-pair":"off",
    "simple-import-sort/imports": "off",
    "spaced-comment": "off",
    "import/order": "off",
    "unicorn/filename-case":"off",
    "react-hooks/exhaustive-deps": "off",
    "import/no-extraneous-dependencies": "off",
    "operator-linebreak": "off",
    "import/extensions": "off",
    "react/no-array-index-key": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-use-before-define": [ "error", { "functions": false } ],
    "arrow-body-style": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-multiple-empty-lines": "off",
    "unicorn/empty-brace-spaces": "off",
    "no-trailing-spaces": "off",
    "tailwindcss/no-custom-classname": "off",
    "no-multi-spaces":"off",
    "@typescript-eslint/space-infix-ops": "off",


    "no-else-return": "warn",
    "unicorn/no-negated-condition": "warn",
    "unicorn/prefer-ternary": "warn",
    "@typescript-eslint/space-before-blocks": "warn",
    "prefer-template": "warn",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "react/destructuring-assignment": "warn",
    "@typescript-eslint/comma-spacing": "warn",
    "@typescript-eslint/keyword-spacing": "warn",
    "@typescript-eslint/comma-dangle": "warn",
    "function-paren-newline": "warn",
    "max-len": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "@typescript-eslint/object-curly-spacing": "warn",
    "sonarjs/prefer-immediate-return": "warn",
    "padded-blocks": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-max-props-per-line": "warn",
    "react/jsx-indent-props": "warn",
    "react/jsx-wrap-multilines": "warn",
    "unicorn/prevent-abbreviations": "warn",
    "react/jsx-indent": "warn",
    "unicorn/no-empty-file": "warn",
    "@typescript-eslint/indent": "warn",
    "@typescript-eslint/quotes": ["warn", "double"],
    "@typescript-eslint/semi": ["warn", "always", { "omitLastInOneLineBlock": true }],
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "object-curly-newline": ["warn", {
      "ObjectExpression": { "multiline": true, "minProperties": 4 },
      "ObjectPattern": { "multiline": true, "minProperties": 4 },
      "ImportDeclaration": { "multiline": true, "minProperties": 6 },
      "ExportDeclaration": { "multiline": true, "minProperties": 6 }
    }],
    "react/jsx-tag-spacing": ["warn", {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never"
    }],
  }
};
