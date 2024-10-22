
// 1. Sliding Window
function maxSumSubarray(arr, k){
    let maxSum=0, windowSum=0;
    for(let i=0; i<k; i++){
        windowSum+=arr[i];
    }
    maxSum=windowSum;
    for(let i=k; i<arr.length; i++){
        windowSum+=arr[i]-arr[i-k];
        maxSum=Math.max(maxSum,windowSum);
    }
    return maxSum;
}

// 2. Two Pointers
function twoSum(arr, target){
    let left=0, right=arr.length-1;

    while(left<right){
        let sum=arr[left]+arr[right];
        if(sum===target) return [left,right];
        else if (sum<target) left++;
        else right--;
    } 
    return null;
}