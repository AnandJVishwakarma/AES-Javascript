// Define the message and the secret key
var message = "Hello, world!";
var secretKey = "mysecretkey123";

// Generate a random initialization vector (IV)
var iv = CryptoJS.lib.WordArray.random(16);

// Encrypt the message using AES-CBC
var encryptedMessage = CryptoJS.AES.encrypt(message, secretKey, { iv: iv }).toString();

// Decrypt the message using AES-CBC
var decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, secretKey, { iv: iv }).toString(CryptoJS.enc.Utf8);

// Print out the results
console.log("Original message: " + message);
console.log("Encrypted message: " + encryptedMessage);
console.log("Decrypted message: " + decryptedMessage);


// Output:
// Original message: Hello, world!
// Encrypted message: U2FsdGVkX18StQm7KjHTyzcwpV8W1t9BVvVglzPfdFk=
// Decrypted message: Hello, world!


// Note that we've added an additional parameter to the encryption and decryption functions to specify the initialization vector (IV) used for AES-CBC encryption. In this example, we're generating a random IV using the CryptoJS.lib.WordArray.random(16) function.

// Also, as with the previous example, the encrypted message is a base64-encoded string. You can decode it using the atob function in JavaScript, like this:
// var decryptedMessage = CryptoJS.AES.decrypt(atob(encryptedMessage), secretKey, { iv: iv }).toString(CryptoJS.enc.Utf8);

// This will output the same decrypted message as before.
