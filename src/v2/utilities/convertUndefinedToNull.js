function convertUndefinedToNull(obj) {
  // Iterate over the object properties
  for (let key in obj) {
    if (obj[key] === undefined) {
      // Convert undefined to null
      obj[key] = null;
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      // Recursively apply the conversion for nested objects
      convertUndefinedToNull(obj[key]);
    }
  }
  return obj;
}
module.exports = convertUndefinedToNull;
