import type { TSESLint } from "@typescript-eslint/utils";
import promise from "eslint-plugin-promise";

const base: TSESLint.FlatConfig.Config = {
  plugins: {
    promise: promise as unknown as TSESLint.Linter.Plugin,
  },
  rules: {
    "promise/always-return": "error",
    "promise/always-catch": "off",
    "promise/catch-or-return": [
      "error",
      {
        allowThen: true,
      },
    ],
    "promise/no-native": "off",
    "promise/param-names": "error",
  },
};

export const configs = {
  base,
};
