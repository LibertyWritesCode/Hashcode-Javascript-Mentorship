/* Write a TypeScript function that takes a sentence as input 
and returns the sentence with each word reversed while keeping the word order intact. 
A word is defined as a sequence of non-space characters.

Input:

A string representing the input sentence.

Output:

A string representing the sentence with each word reversed.
*/

function reverseWords(sentence: string): string {
    const words = sentence.split(' '); // Split the sentence into words
    const reversedWords = words.map(word => reverseWord(word)); // Reverse each word using a helper function
    return reversedWords.join(' '); // Join the reversed words back into a sentence
  }
  
  function reverseWord(word: string): void {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];

    }
}