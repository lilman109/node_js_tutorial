const REQUEST_TIMOUT = 500;

function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to url`);
}

module.exports = { send, REQUEST_TIMOUT };

// Other ways to exort modules
// module.exports.REQUEST_TIMOUT = 500;
// module.exports.send = ...
// module.exports = ... when only one export
// exports.send = ...
