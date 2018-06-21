// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.


console.log('linked');

function firstNotRepeatingCharacter(s) {

} 

3
// ---- TESTS -----

// Test 1
firstNotRepeatingCharacter("abacabad")
// Output:
// Run the code to see output
// Expected Output:
// "c"
// Console Output:
// Empty


// Test 2
// Input:
// s: "abacabaabacaba"
// Output:
// Run the code to see output
// Expected Output:
// "_"
// Console Output:
// Empty


// Test 3
// Input:
// s: "z"
// Output:
// Run the code to see output
// Expected Output:
// "z"
// Console Output:
// Empty


// Test 4
// Input:
// s: "bcb"
// Output:
// Run the code to see output
// Expected Output:
// "c"
// Console Output:
// Empty