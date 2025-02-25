// - **`WeakSet`**: Only objects, **not iterable**, auto-removed when unreferenced.
let weakSet = new WeakSet();

let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

// If obj1 is no longer referenced anywhere, it gets garbage collected automatically
obj1 = null;

// There's no way to check the size of a WeakSet or iterate over it

// - **`Set`**: Stores unique values, iterable.
let set = new Set();

set.add(10);
set.add("Hello");
set.add({ name: "Charlie" });

console.log(set.has(10)); // true
console.log(set.size); // 3

// Iterating over a Set
for (let value of set) {
    console.log(value);
}

// Removing a value
set.delete(10);
console.log(set.has(10)); // false
