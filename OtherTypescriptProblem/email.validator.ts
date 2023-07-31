/*

Write a TypeScript function that validates whether a given email address is in a valid format or not. The function should check if the email follows the standard format rules for email addresses.

Input:

A string representing the email address to be validated.
Output:

A boolean value indicating whether the email address is valid (true) or invalid (false).
Rules for Valid Email Format:

The email address must have exactly one "@" symbol.
The "@" symbol should not be the first or last character of the email address.
The email address must have at least one character before the "@" symbol and at least one character after the "@" symbol.
The email address can only contain alphanumeric characters (A-Z, a-z, 0-9), dots ".", hyphens "-", and underscores "_".
The email address cannot have consecutive dots, hyphens, or underscores.

*/

function isValidEmail(email: string): boolean {
    // Regular expression pattern to validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Test the email against the regular expression
    return emailRegex.test(email);
  }
  
  // Example usage:
  const email1 = "user@example.com";
  const email2 = "invalid-email";
  const email3 = "user@subdomain.domain";
  
  console.log(isValidEmail(email1)); 
  console.log(isValidEmail(email2)); 
  console.log(isValidEmail(email3)); 
  