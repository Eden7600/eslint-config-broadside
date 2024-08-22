export type BroadsidePeerDependencies =
  | "eslint-plugin-unicorn"
  | "eslint-plugin-jsdoc"
  | "eslint-plugin-security";

export const peerDependencies: BroadsidePeerDependencies[] = [
  "eslint-plugin-unicorn",
  "eslint-plugin-jsdoc",
  "eslint-plugin-security",
];

export type BroadsidePeerDependenciesRecord = Record<BroadsidePeerDependencies, boolean>;
