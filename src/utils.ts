/**
 * Given any children type param, will always return an array
 */
export function resolveChildren<T>(children?: Array<T>|T): Array<T> {
  if (!children) {
    return []
  }
  return Array.isArray(children) ? children : [children]
}