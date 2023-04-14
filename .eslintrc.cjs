module.exports = {
  root: true,
  env: { node: true },
  ignorePatterns: ["**/*.cjs", "next-env.d.ts", "*config.*", "package*.json", "*config.js", "./*.js"],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:react/jsx-runtime",
    "plugin:tailwindcss/recommended",
    "plugin:import/recommended",
    "plugin:json/recommended",
    "plugin:no-use-extend-native/recommended",
    "plugin:pii/recommended",
    "plugin:sonarjs/recommended",
    "plugin:switch-case/recommended",
    "plugin:unicorn/all",
    "plugin:xss/recommended"
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
    "simple-import-sort",
    "sonarjs",
    "switch-case",
    "unicorn",
    "no-constructor-bind",
    "no-secrets",
    "no-unsanitized",
    "pii",
    "security",
    "react-hooks",
    "jsx-a11y",
    "xss"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // extraFileExtensions: [".json", ".md"],
    ecmaVersion: "latest",
    sourceType: 'module',
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.eslint.json",
  },
  settings: {
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
