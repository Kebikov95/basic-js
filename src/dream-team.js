module.exports = function createDreamTeam(array) {

  if (!Array.isArray(array) || array.length === 0) {
    return false;
  }

  let str = array.reduce( function(s, i) {

    if(typeof i == "string") s = s + i.trim()[0];
    return s;
  }, "");
  str = str.split('').sort().join('').toUpperCase();
  return str.split('').sort().join('').toUpperCase();
};