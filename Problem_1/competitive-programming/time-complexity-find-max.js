// Time Complexity: Find the maximum number in an array.

function findMax(arr){
    let maxNum=arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i]>maxNum){
            maxNum=arr[i];
        }
    }

    return maxNum;
}

// Time Complexity: O(n)