import eslint from "@eslint/js";
import type { TSESLint } from "@typescript-eslint/utils";
import prettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tsEslint, { type ConfigWithExtends } from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

import { configs as eslintConfigs } from "./eslint.js";
import { configs as promiseConfigs } from "./promise.js";
import { configs as typescriptEslintConfigs } from "./typescriptEslint.js";
import { checkPeerDependencies } from "./utils.js";

export interface DefaultConfigOptions {
  /**
   * Parser options to be passed to the TypeScript parser.
   */
  parserOptions?: NonNullable<ConfigWithExtends["languageOptions"]>["parserOptions"];

  /**
   * Global variables to be defined for all files.
   */
  globals?: NonNullable<ConfigWithExtends["languageOptions"]>["globals"];

  /**
   * Enable expert mode for less strict rules. Expert mode is not recommended for beginners as it removes certain checks that are restrictive for experts but help beginners to build good habits.
   */
  expertMode?: boolean;
}

/**
 * @deprecated Use `tsEslintConfig` instead
 */
export const defaultConfig = tsEslintConfig;

/**
 * Exports the default configuration to be passed to `tsEslint.config`. Use this if you want more control of typescript-eslint configuration output.
 * @param {DefaultConfigOptions} options
 * @returns Promise<Array of typescript-eslint configurations>
 */
export async function tsEslintConfig(options?: DefaultConfigOptions): Promise<ConfigWithExtends[]> {
  const installedPeers = await checkPeerDependencies();

  // Dynamically import peer dependencies
  const jsdocConfigs = installedPeers["eslint-plugin-jsdoc"] ? (await import("./jsdoc.js")).configs : null;
  const unicornConfigs = installedPeers["eslint-plugin-unicorn"]
    ? (await import("./unicorn.js")).configs
    : null;
  const securityConfigs = installedPeers["eslint-plugin-security"]
    ? (await import("./security.js")).configs
    : null;

  const languageOptions: ConfigWithExtends["languageOptions"] = {
    globals: {
      ...globals.node,
      ...options?.globals,
    },
    parserOptions: {
      projectService: {
        defaultProject: "tsconfig.json",
      },
    },
  };

  return [
    {
      ignores: ["**/dist/**", "**/node_modules/**"],
    },
    eslint.configs.recommended,
    {
      languageOptions: {
        ...tsEslint.configs.base.languageOptions,
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [...tsEslint.configs.strictTypeChecked, ...tsEslint.configs.stylisticTypeChecked],
    },
    {
      languageOptions,
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
    },
    {
      name: "eslint-config-broadside/base",
      files: ["**/*.ts", "**/*.js", "**/*.cjs", "**/*.mjs", "**/*.tsx"],
      plugins: {
        ...(jsdocConfigs ? jsdocConfigs.base.plugins : {}),
        ...promiseConfigs.base.plugins,
        ...(securityConfigs ? securityConfigs.base.plugins : {}),
        ...(unicornConfigs ? unicornConfigs.base.plugins : {}),
      },
      rules: {
        ...eslintConfigs.base.rules,
        ...(jsdocConfigs ? jsdocConfigs.base.rules : {}),
        ...promiseConfigs.base.rules,
        ...(securityConfigs ? securityConfigs.base.rules : {}),
        ...(unicornConfigs ? unicornConfigs.base.rules : {}),
      },
    },
    {
      name: "eslint-config-broadside/ts",
      files: ["**/*.ts", "**/*.tsx"],
      ...typescriptEslintConfigs.base,
      ...typescriptEslintConfigs.disableEslintRules,
    },
    {
      name: "eslint-config-broadside/js",
      files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
      languageOptions: {
        sourceType: "script",
      },
      ...eslintConfigs.js,
    },
    {
      name: "eslint-config-broadside/js-disable-type-check",
      files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
      extends: [tsEslint.configs.disableTypeChecked],
    },
    eslintConfigPrettier,
    prettier,
  ];
}

/**
 * Exports eslint configurations. Use this if you do not need to explicitly import typescript-eslint in your project.
 * @param options
 * @returns An array of eslint configurations
 */
export async function config(options?: DefaultConfigOptions): Promise<TSESLint.FlatConfig.ConfigArray> {
  const baseConfig = await tsEslintConfig(options);
  return tsEslint.config(...baseConfig);
}
