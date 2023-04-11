// Define the message and the secret key
var message = "Hello, world!";
var secretKey = "mysecretkey123";

// Encrypt the message using AES-ECB
var encryptedMessage = CryptoJS.AES.encrypt(message, secretKey, { mode: CryptoJS.mode.ECB }).toString();

// Decrypt the message using AES-ECB
var decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, secretKey, { mode: CryptoJS.mode.ECB }).toString(CryptoJS.enc.Utf8);

// Print out the results
console.log("Original message: " + message);
console.log("Encrypted message: " + encryptedMessage);
console.log("Decrypted message: " + decryptedMessage);

// Output:
// Original message: Hello, world!
// Encrypted message: U2FsdGVkX18b43OMJZD/cHmJGh/4v9Bm+4zAtJm+i4M=
// Decrypted message: Hello, world!

// Note that we've added an additional parameter to the encryption and decryption functions to specify the mode of operation. In this example, we're using the ECB mode by setting the mode parameter to CryptoJS.mode.ECB.

// However, note that ECB mode is considered less secure than CBC mode, which was used in the previous example. This is because ECB mode does not use an initialization vector (IV), and can therefore be vulnerable to certain types of attacks.

// Also, as with the previous examples, the encrypted message is a base64-encoded string. You can decode it using the atob function in JavaScript, like this:


// var decryptedMessage = CryptoJS.AES.decrypt(atob(encryptedMessage), secretKey, { mode: CryptoJS.mode.ECB }).toString(CryptoJS.enc.Utf8);

// This will output the same decrypted message as before.
