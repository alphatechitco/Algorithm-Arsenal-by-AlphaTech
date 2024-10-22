// In-Place Modification: Rotating an Array In-Place


function rotate(nums, k){
    let n=nums.length;
    k=k%n;
    reverse(nums, 0, n-1);
    reverse(nums, 0, k-1);
    reverse(nums, 0, n-1);
}

function reverse(nums, start, end){
    while(start<end){
        let temp=nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
        start++;
        end--;
    }
}