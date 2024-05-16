/*Given an array nums of size n, return the majority element. The majority element is the
element that appears more thatn [n/2] times. You may assume that the majority element always exists in the array

example 1: 
    input : nums = [323]
    output : 3

example 2:
    input : nums = [2,2,1,1,1,2,2]
    output : 2
*/

/*function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    // Phase 1: Find a candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Verify the candidate (this step is optional since the problem guarantees a majority element exists)
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    }
}

const nums = [2,2,1,1,1,2,2]

console.log(majorityElement(nums))*/

function majority(arr){

    let mySet = new Set(arr)
    
    mySet.forEach((item) => {
       if(arr.filter(val => val == item).length > arr.length/2){
        result = item
    }
    })

    return result
}

console.log(majority([2,2,1,1,1,2,2]))