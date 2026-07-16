/**
 * Reads an environment variable, falling back to a default when unset or blank.
 *
 * @param {string} name - Environment variable name.
 * @param {string} fallback - Value to return when the variable is unset or blank.
 * @returns {string} The environment variable's value, or the fallback.
 */
export function getEnvVariable(name, fallback) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : fallback;
}
