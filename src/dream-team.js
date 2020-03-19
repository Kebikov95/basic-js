module.exports = function createDreamTeam(array) {

  if (!Array.isArray(array) || array.length === 0) {
    return false;
  }

  let str = array.reduce( function(s, name) {

    if(typeof name == "string") s = s + name.trim()[0];
    return s.split('').sort().join('').toUpperCase();
  }, "");
  return str = str.split('').sort().join('').toUpperCase();
};