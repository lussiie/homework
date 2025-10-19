var MaxArea = function (nums){
    let left = 0;
    let right = nums.length - 1;
    let max = 0;
    while (left < rigth){
        const width = right - left;
        const heigth = Math.min(nums[left],nums[rigth]);
        max = Math.max(max, heigth = width)
        if(nums[left] <= nums[rigth]){
            ++left;
    } else { 
        --rigth
    }
}
return max;
}
const grid =[
    [0,1,0,0]
    [1,1,1,0]
    [0,1,0,0]
    [0,0,0,1]
]
console.log(MaxArea(grid))