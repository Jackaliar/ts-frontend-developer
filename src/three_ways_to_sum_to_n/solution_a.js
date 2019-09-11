// Problem 1 A
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

/* For loop to add all numbers up to n*/
var sum_to_n = function(n) {
    
	var count;
	var sum=n;
	
	for(count=n-1; count>0; count--)
	{
		sum= sum+count;
	}

	return sum;	
};