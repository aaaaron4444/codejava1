function objectsAreEqual(obj1, obj2) {
    // Check if both objects are defined and are of the same type
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if both objects have the same number of properties
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all properties and values are equal
    for (const key of keys1) {
        if (!keys2.includes(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
const obj3 = {a: 1, b: 3};

console.log(objectsAreEqual(obj1, obj2)); // Output: true
console.log(objectsAreEqual(obj1, obj3)); // Output: false