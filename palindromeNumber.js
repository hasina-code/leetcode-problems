var isPalindrome = function(x) {
    
    if (x < 0) return false;

    let original = x;
    let reversed = 0;

    while (x > 0) {
        let lastDigit = x % 10;                
        reversed = reversed * 10 + lastDigit; 
        x = Math.floor(x / 10);                
    }

    return original === reversed;
};



console.log("Test Case 1 Output:", isPalindrome(121));  
console.log("Test Case 2 Output:", isPalindrome(-121)); 
console.log("Test Case 3 Output:", isPalindrome(10));   