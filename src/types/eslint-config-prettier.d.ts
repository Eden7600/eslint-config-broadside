declare module "eslint-config-prettier" {
  import type { TSESLint } from "@typescript-eslint/utils";

  const config: TSESLint.FlatConfig.Config;
  export default config;
}
