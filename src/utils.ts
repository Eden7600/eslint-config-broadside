import { peerDependencies, BroadsidePeerDependenciesRecord } from "./types/peer-dependencies.js";
import { resolve } from "import-meta-resolve";

/**
 * Checks which peer dependencies are installed and can be resolved.
 *
 * @returns A promise that resolves to an object where keys are peer dependency names and values are booleans indicating if they are installed.
 */
export async function checkPeerDependencies(): Promise<BroadsidePeerDependenciesRecord> {
  const results = await Promise.all(
    peerDependencies.map((packageName) => {
      try {
        resolve(packageName, import.meta.url);
        return [packageName, true] as const;
      } catch (error) {
        if (error instanceof Error && "code" in error && error.code === "ERR_MODULE_NOT_FOUND") {
          return [packageName, false] as const;
        }

        throw error;
      }
    }),
  );

  return Object.fromEntries(results) as BroadsidePeerDependenciesRecord;
}
