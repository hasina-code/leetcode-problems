var twoSum = function(nums, target) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let complement = target - currentNum; 
        
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        
        map[currentNum] = i;
    }
};


console.log("Test Case 1 Output:", twoSum([2, 7, 11, 15], 9)); 
console.log("Test Case 2 Output:", twoSum([3, 2, 4], 6));       
console.log("Test Case 3 Output:", twoSum([3, 3], 6));         