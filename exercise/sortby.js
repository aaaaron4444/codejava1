var sortBy = function(arr, fn) {
    const sortedArr = arr.slice().sort((a, b) => fn(a) - fn(b));
    return sortedArr;
}


function exampleFn(x) {
    return x * x; 
}

const arr = [3, 1, 2, 4, 5];
const sortedArr = sortBy(arr, exampleFn);
console.log(sortedArr); 
