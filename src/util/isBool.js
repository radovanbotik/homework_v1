export function isBool(value) {
  const isBoolean = typeof value === "boolean";
  if (isBoolean) {
    if (value) return "Yes";
    else return "No";
  }
  return value;
}
