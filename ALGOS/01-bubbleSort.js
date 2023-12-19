// bubbleSort()
/* 
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/
//             i
//               j
const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums) { 
    console.log("Input :", nums) 
    for(let i=0;i<nums.length;i++){
        for(let j= i+1; j< nums.length; j++){
            // console.log("nums[i]: ",nums[i],"nums[j]: " ,nums[j], "Swap :", nums[i]> nums[j])
            if(nums[i]> nums[j]){
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
}
console.log("Output :" ,bubbleSort(nums1))
console.log("Output :" ,bubbleSort(nums2))
console.log("Output :" ,bubbleSort(nums3))