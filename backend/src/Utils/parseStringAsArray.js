module.exports = function parseSringAsArray(ArrayAsString) {
  return ArrayAsString.split(",").map(tech => tech.trim());
};
