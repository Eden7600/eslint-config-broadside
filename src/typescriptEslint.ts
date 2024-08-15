import type { TSESLint } from "@typescript-eslint/utils";

const base: TSESLint.FlatConfig.Config = {
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        minimumDescriptionLength: 4,
      },
    ],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/no-restricted-types": [
      "error",
      {
        types: {
          object: {
            message:
              "The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848",
            fixWith: "Record<string, unknown>",
          },
          Buffer: {
            message: "Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer",
            suggest: ["Uint8Array"],
          },
          "[]": "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
          "[[]]":
            "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
          "[[[]]]": "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
          "[[[[]]]]": "Don't use `[[[[]]]]`. Refactor your code.",
          "[[[[[]]]]]": "Don't use `[[[[[]]]]]`. Refactor your code.",
        },
      },
    ],
    "@typescript-eslint/class-literal-property-style": ["error", "getters"],
    "@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
    "@typescript-eslint/consistent-indexed-object-style": "error",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
  },
};

const disableEslintRules: TSESLint.FlatConfig.Config = {
  rules: {
    "dot-notation": "off",
  },
};

export const configs = {
  base,
  disableEslintRules,
};
