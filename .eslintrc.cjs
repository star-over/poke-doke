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
    "@typescript-eslint/quotes": ["warn", "double"],
    "@typescript-eslint/semi": ["warn", "always", { "omitLastInOneLineBlock": true }],
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
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
