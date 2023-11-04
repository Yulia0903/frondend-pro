"use strict";

async function createHash(key, secret) {
  const data = key + secret;
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

const key = prompt("Enter some key");
const secret = "mySecret";

createHash(key, secret).then((hash) => {
  console.log("Hash 1:", hash);
});

createHash(key, secret).then((hash) => {
  console.log("Hash 2:", hash);
});
