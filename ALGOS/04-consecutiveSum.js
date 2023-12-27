// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
const k = 16
const arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        let innerArray = []
        let j = i
        while (sum <= k && j < arr.length) {
            // if (sum + arr[j] <= k) {
                sum += arr[j]
                innerArray.push(arr[j])
                j++
                if (sum == k) {
                    // result.push([...innerArray])
                    result.push(arr.slice(i, j))
                }
            // }
            // }else {
            //     break
            // }

        }
    }
    return result
}
// console.log(arr);
console.log(findConsecutiveSums(arr, k));