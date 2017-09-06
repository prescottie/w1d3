// var str = process.argv.slice(2);
function countLetters(str){
  var letters = str.split(' ').join('');
  var output = {};

  for (var i in letters) {
    var propName = letters[i];
    if (output[propName]){
      output[propName] = output[propName] + 1;
    } else {
      output[propName] = 1;
    }


  }
return output;

}
console.log(countLetters("lighthouse in the house"));
