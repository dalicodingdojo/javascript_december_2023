const insertionSort = (arr) => {
    console.log(`INPUT ARRAY : ${arr}`);
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if(temp < arr[j]) {
                arr[j+1] = arr[j]
                if(j===0){
                    arr[j] = temp
                }
            }else{
                arr[j+1] = temp
                break
            }
        }
    }
    console.log(`SORTED ARRAY : ${arr} \n`);
    return arr
}
/*
[3, 5, 2, 1, 0]
i = 1 ; temp = 5; j 0 -> 0 => arr[j] = 3
[3, 5, 2, 1, 0]
[3, 5, 5, 1, 0]
[3, 3, 5, 1, 0]
i = 2 ; temp = 2; j 1 -> 0 => arr[j] = 5, arr[j] = 3
-------------------------
[29,10,1,37,14]
[10, 29,1,37,14]
[1, 10,29,37,14]
i = 3 ; arr[i] = temp = 37 ; j 2->0
*/ 
insertionSort([3, 5, 2, 1, 0])
insertionSort([3, 0])
insertionSort([0])
insertionSort([])
insertionSort([1, 2, 3, 4, 5])
insertionSort([5, 4, 3, 2, 1])
insertionSort([5, 4, 0, 2, 1])