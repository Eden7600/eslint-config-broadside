import type { TSESLint } from "@typescript-eslint/utils";

const base: TSESLint.FlatConfig.Config = {
  rules: {
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-empty-static-block": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": [
      "error",
      {
        enforceForOrderingRelations: true,
      },
    ],
    "no-unsafe-optional-chaining": [
      "error",
      {
        disallowArithmeticOperators: true,
      },
    ],
    "no-useless-backreference": "error",
    "use-isnan": "error",
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: false,
      },
    ],
    "no-unexpected-multiline": "error",
    "accessor-pairs": [
      "error",
      {
        enforceForClassMembers: true,
      },
    ],
    "array-callback-return": [
      "error",
      {
        allowImplicit: true,
      },
    ],
    "block-scoped-var": "error",
    complexity: "warn",
    curly: "error",
    "default-case": "error",
    "default-case-last": "error",
    "dot-notation": "error",
    eqeqeq: "error",
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-multi-str": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-object-constructor": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": [
      "error",
      {
        enforceForJSX: true,
      },
    ],
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": "warn",
    "no-with": "error",
    "prefer-promise-reject-errors": [
      "error",
      {
        allowEmptyReject: true,
      },
    ],
    "prefer-regex-literals": [
      "error",
      {
        disallowRedundantWrapping: true,
      },
    ],
    radix: "error",
    yoda: "error",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": [
      "error",
      "event",
      {
        name: "Buffer",
        message: "Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer",
      },
      {
        name: "atob",
        message: "This API is deprecated. Use https://github.com/sindresorhus/uint8array-extras instead.",
      },
      {
        name: "btoa",
        message: "This API is deprecated. Use https://github.com/sindresorhus/uint8array-extras instead.",
      },
    ],
    "no-shadow-restricted-names": "error",
    "no-undef-init": "error",
    "no-undef": [
      "error",
      {
        typeof: true,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: /^_/.source,
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: /^_/.source,
        caughtErrors: "all",
        caughtErrorsIgnorePattern: /^_$/.source,
      },
    ],
    "no-buffer-constructor": "error",
    "no-restricted-imports": [
      "error",
      "domain",
      "freelist",
      "smalloc",
      "punycode",
      "sys",
      "querystring",
      "colors",
      {
        name: "buffer",
        message: "Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer",
      },
      {
        name: "node:buffer",
        message: "Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer",
      },
    ],
    camelcase: [
      "error",
      {
        properties: "always",
      },
    ],
    "capitalized-comments": [
      "error",
      "always",
      {
        // You can also ignore this rule by wrapping the first word in quotes.
        // c8 => https://github.com/bcoe/c8
        ignorePattern: /pragma|ignore|prettier-ignore|webpack\w+:|c8|v8|type-coverage:/.source,
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    ],
    "func-name-matching": [
      "error",
      {
        considerPropertyDescriptor: true,
      },
    ],
    "func-names": ["error", "never"],
    "logical-assignment-operators": [
      "error",
      "always",
      {
        enforceForIfStatements: true,
      },
    ],
    "max-depth": "warn",
    "max-lines": [
      "warn",
      {
        max: 1500,
        skipComments: true,
      },
    ],
    "max-nested-callbacks": ["warn", 4],
    "max-params": [
      "warn",
      {
        max: 4,
      },
    ],
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "error",
    "no-unneeded-ternary": "error",
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "unicode-bom": ["error", "never"],
    "arrow-body-style": "error",
    "constructor-super": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-dupe-class-members": "error",
    "no-new-native-nonconstructor": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": [
      "error",
      {
        enforceForClassMembers: true,
      },
    ],
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": [
      "error",
      "always",
      {
        avoidExplicitReturnArrows: true,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: true,
      },
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "require-yield": "error",
  },
};

const js: TSESLint.FlatConfig.Config = {
  rules: {
    curly: ["error", "multi-line"],
    "dot-notation": ["error", { allowKeywords: true }],
    "getter-return": ["error"],
    "no-array-constructor": "error",
    "no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],
    "no-new-func": "error",
    "no-new-symbol": "error",
    "no-return-await": "error",
    "no-shadow": "error",
    "no-undef": "error",
    "no-unexpected-multiline": "error",
    "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],
    "no-useless-constructor": "error",
    "no-var": "error",
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
  },
};

export const configs = {
  base,
  js,
};
