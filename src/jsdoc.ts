import type { TSESLint } from "@typescript-eslint/utils";
import jsdoc from "eslint-plugin-jsdoc";

const base: TSESLint.FlatConfig.Config = {
  settings: {
    jsdoc: {
      preferredTypes: {
        Array: "Array<object>",
        "Array.": "Array<object>",
        "Array<>": "[]",
        "Array.<>": "[]",
        "Promise.<>": "Promise<>",
      },
    },
  },
  plugins: {
    jsdoc,
  },
  rules: {},
};

export const configs = {
  base,
};
