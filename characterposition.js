function countLetters(str){
  var output = {};

// for every letter return the characters index in the array

  for (var i in str) {
    var propName = str[i];
    if (/\w/.test(propName)){
      if (output[propName]){
      output[propName].push(i);
      } else {
        output[propName] = [i];
    }



    }

  }
return output;
}
console.log(countLetters("lighthouse in the house"));
