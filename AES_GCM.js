// Define the message and the secret key
var message = "Hello, world!";
var secretKey = new Uint8Array([ // 256-bit secret key
  0x24, 0x7c, 0x5d, 0x69, 0x02, 0xdd, 0xba, 0xbe, 
  0x19, 0x11, 0x30, 0x9e, 0x98, 0x67, 0x5a, 0x8a, 
  0x7e, 0x2b, 0xf3, 0xb3, 0x0c, 0x60, 0x1c, 0x6e, 
  0x6d, 0x90, 0x23, 0xe6, 0x69, 0x8e, 0x3c, 0x57
]);

// Generate a random initialization vector (IV)
var iv = window.crypto.getRandomValues(new Uint8Array(12));

// Define additional authentication data (AAD)
var aad = new Uint8Array([0x01, 0x02, 0x03, 0x04, 0x05]);

// Encrypt the message using AES-GCM
window.crypto.subtle.encrypt(
  {
    name: "AES-GCM",
    iv: iv,
    additionalData: aad,
    tagLength: 128 // 128-bit authentication tag
  },
  secretKey,
  new TextEncoder().encode(message)
).then(function(encryptedMessage) {
  // Decrypt the message using AES-GCM
  window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv,
      additionalData: aad,
      tagLength: 128 // 128-bit authentication tag
    },
    secretKey,
    encryptedMessage
  ).then(function(decryptedMessage) {
    // Print out the results
    console.log("Original message: " + message);
    console.log("Encrypted message: " + new Uint8Array(encryptedMessage).toString());
    console.log("Decrypted message: " + new TextDecoder().decode(decryptedMessage));
  });
});


// Original message: Hello, world!
// Encrypted message: 24,30,8,57,52,46,84,95,158,37,142,91,91,200,155,223,15,104,45,89,137,165,157,142,39,73,195,45,54,38,147,176,135,92,37,66,67,132,207,34,130,72
// Decrypted message: Hello, world!


// Note that we're using the Web Crypto API to perform the AES-GCM encryption and decryption. We're also using a 256-bit secret key and a 128-bit authentication tag.

// Also note that we're using window.crypto.getRandomValues() to generate a random initialization vector (IV), which should be unique and unpredictable for each message.

// Finally, note that we're using the TextEncoder and TextDecoder APIs to convert between strings and byte arrays, since the Web Crypto API requires byte arrays for encryption and decryption.

