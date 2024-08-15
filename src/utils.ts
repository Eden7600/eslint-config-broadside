export function isPackageInstalled(packageName: string) {
  try {
    require.resolve(packageName);
    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}
