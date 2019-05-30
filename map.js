var words = ["ground", "control", "to", "major", "tom"];

var map = function(array, cb) {
  var newArray = [];
  for (i of array) {
    newArray.push(cb(i))
  }
  console.log(newArray)
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
