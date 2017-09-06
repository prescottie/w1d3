// var str = process.argv.slice(2);
function countLetters(str){
  var output = {};
  var letterCount = 0;
  for (var i = 0; i < str.length; i++){
    if (/\w/.test(str[i])) {
      str[i] = 'letter';
    }


  }
// return output;

}
console.log(countLetters("lighthouse in the house"));
