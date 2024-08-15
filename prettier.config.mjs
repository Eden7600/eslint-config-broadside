/** @type {import("prettier").Config} */
export default {
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 110,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "all",
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  endOfLine: "auto",
  htmlWhitespaceSensitivity: "css",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,
  overrides: [
    {
      files: ["*.js", "*.cjs", "*.mjs"],
      options: {
        parser: "espree",
      },
    },
    {
      files: "*.json",
      options: {
        parser: "json",
      },
    },
    {
      files: "*.ts",
      options: {
        parser: "typescript",
      },
    },
  ],
};
