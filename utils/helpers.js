export function getEnvVariable(name, fallback) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : fallback;
}
