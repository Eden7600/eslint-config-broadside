import type { TSESLint } from "@typescript-eslint/utils";
import stylistic from "@stylistic/eslint-plugin";

const base: TSESLint.FlatConfig.Config = {
  plugins: {
    "@stylistic": stylistic as unknown as TSESLint.Linter.Plugin,
  },
  rules: {
    "@stylistic/comma-dangle": ["error", "always-multiline"],
    "@stylistic/no-extra-semi": "error",
    "@stylistic/dot-location": ["error", "property"],
    "@stylistic/no-floating-decimal": "error",
    "@stylistic/no-multi-spaces": "error",
    "@stylistic/wrap-iife": [
      "error",
      "inside",
      {
        functionPrototypeMethods: true,
      },
    ],
    "@stylistic/array-bracket-newline": ["error", "consistent"],
    "@stylistic/array-bracket-spacing": ["error", "never"],
    "@stylistic/array-element-newline": ["error", "consistent"],
    "@stylistic/brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: false,
      },
    ],
    "@stylistic/comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/comma-style": ["error", "last"],
    "@stylistic/computed-property-spacing": [
      "error",
      "never",
      {
        enforceForClassMembers: true,
      },
    ],
    "@stylistic/eol-last": "error",
    "@stylistic/function-call-spacing": ["error", "never"],
    "@stylistic/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/jsx-quotes": ["error", "prefer-single"],
    "@stylistic/key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    "@stylistic/keyword-spacing": "error",
    "@stylistic/linebreak-style": [process.platform === "win32" ? "off" : "error", "unix"],
    "@stylistic/lines-between-class-members": [
      "error",
      {
        enforce: [
          {
            blankLine: "always",
            prev: "*",
            next: "method",
          },
          {
            blankLine: "always",
            prev: "method",
            next: "field",
          },
          {
            blankLine: "never",
            prev: "field",
            next: "field",
          },
        ],
      },
    ],
    "@stylistic/max-len": [
      "warn",
      {
        code: 200,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    "@stylistic/max-statements-per-line": "error",
    "@stylistic/multiline-ternary": ["error", "always-multiline"],
    "@stylistic/new-parens": "error",
    "@stylistic/no-mixed-operators": "error",
    "@stylistic/no-mixed-spaces-and-tabs": "error",
    "@stylistic/no-multiple-empty-lines": [
      "error",
      {
        max: 1,
      },
    ],
    "@stylistic/no-whitespace-before-property": "error",
    "@stylistic/no-trailing-spaces": "error",
    "@stylistic/one-var-declaration-per-line": "error",
    "@stylistic/operator-linebreak": ["error", "before"],
    "@stylistic/padded-blocks": [
      "error",
      "never",
      {
        allowSingleLineBlocks: false,
      },
    ],
    "@stylistic/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "multiline-block-like",
        next: "*",
      },
    ],
    "@stylistic/quote-props": ["error", "as-needed"],
    "@stylistic/semi-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/semi-style": ["error", "last"],
    "@stylistic/semi": ["error", "always"],
    "@stylistic/space-before-blocks": ["error", "always"],
    "@stylistic/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "@stylistic/space-in-parens": ["error", "never"],
    "@stylistic/space-infix-ops": "error",
    "@stylistic/space-unary-ops": "error",
    "@stylistic/spaced-comment": [
      "error",
      "always",
      {
        line: {
          exceptions: ["-", "+", "*"],
          markers: ["!", "/", "=>"],
        },
        block: {
          exceptions: ["-", "+", "*"],
          markers: ["!", "*"],
          balanced: true,
        },
      },
    ],
    "@stylistic/switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/template-tag-spacing": ["error", "never"],
    "@stylistic/arrow-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "@stylistic/block-spacing": ["error", "never"],
    "@stylistic/generator-star-spacing": ["error", "both"],
    "@stylistic/rest-spread-spacing": ["error", "never"],
    "@stylistic/template-curly-spacing": "error",
    "@stylistic/yield-star-spacing": ["error", "both"],
    "@stylistic/indent-binary-ops": ["error", "tab"],
  },
};

export const configs = {
  base,
};
