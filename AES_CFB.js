// Define the message and the secret key
var message = "Hello, world!";
var secretKey = "mysecretkey123";

// Generate a random initialization vector (IV)
var iv = CryptoJS.lib.WordArray.random(16);

// Encrypt the message using AES-CFB
var encryptedMessage = CryptoJS.AES.encrypt(message, secretKey, { iv: iv, mode: CryptoJS.mode.CFB }).toString();

// Decrypt the message using AES-CFB
var decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, secretKey, { iv: iv, mode: CryptoJS.mode.CFB }).toString(CryptoJS.enc.Utf8);

// Print out the results
console.log("Original message: " + message);
console.log("Encrypted message: " + encryptedMessage);
console.log("Decrypted message: " + decryptedMessage);


// Output:
// Original message: Hello, world!
// Encrypted message: U2FsdGVkX1/DxBpZG1KZTHRYtLguGMz9DtbjJOG3yQA=
// Decrypted message: Hello, world!

// var decryptedMessage = CryptoJS.AES.decrypt(atob(encryptedMessage), secretKey, { iv: iv, mode: CryptoJS.mode.CFB }).toString(CryptoJS.enc.Utf8);

