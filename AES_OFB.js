// Define the message and the secret key
var message = "Hello, world!";
var secretKey = "mysecretkey123";

// Generate a random initialization vector (IV)
var iv = CryptoJS.lib.WordArray.random(16);

// Encrypt the message using AES-OFB
var encryptedMessage = CryptoJS.AES.encrypt(message, secretKey, { iv: iv, mode: CryptoJS.mode.OFB }).toString();

// Decrypt the message using AES-OFB
var decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, secretKey, { iv: iv, mode: CryptoJS.mode.OFB }).toString(CryptoJS.enc.Utf8);

// Print out the results
console.log("Original message: " + message);
console.log("Encrypted message: " + encryptedMessage);
console.log("Decrypted message: " + decryptedMessage);


// var decryptedMessage = CryptoJS.AES.decrypt(atob(encryptedMessage), secretKey, { iv: iv, mode: CryptoJS.mode.OFB }).toString(CryptoJS.enc.Utf8);
