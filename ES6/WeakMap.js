// Weak Map :
// keys must be objects
// Suitable for memory sensitive operations


const obj = {}
const weakMap = new WeakMap()
WeakMap.set(obj,"value")

// WeakMap will automatically remove entries when they are no longer referenced

console.log(weakMap.get(obj)) // Output: value

obj = null

console.log(weakMap.get(obj)) // Output: undefined

// WeakMap is not iterable and does not have forEach, map, or reduce methods.

// WeakMap does not prevent object from being garbage collected.
// Map
// Supports any type as a key (objects, primitives, etc.).
// Persistently holds references to both keys and values, meaning keys won't be garbage collected automatically.
// Useful for general-purpose key-value storage.

const map = new Map()
map.set("key","value")

// Keys in Map are not garbage-collected unless explicitly deleted.
// WeakMap keys are weakly referenced (garbage collected when no longer used), while Map keeps strong references.
// WeakMap is best for scenarios where you want to avoid memory leaks and don't want to keep keys alive unnecessarily.