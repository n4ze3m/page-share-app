export function removeModelSuffix(modelName: string): string {
  // Remove common model suffixes and clean up the name
  return modelName
    .replace(/-\d{4,}$/g, "") // Remove date suffixes like -20240101
    .replace(/:\d+$/g, "") // Remove version numbers like :1
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/-/g, " ") // Replace hyphens with spaces
    .trim()
}
