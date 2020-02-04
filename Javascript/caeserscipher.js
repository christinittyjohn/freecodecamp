function rot13(str) { // LBH QVQ VG!
  let cipherChars = {A:"N",B:"O",C:"P",D:"Q",E:"R",F:"S",G:"T",H:"U",I:"V",J:"W",K:"X",L:"Y",M:"Z",N:"A",O:"B",P:"C",Q:"D",R:"E",S:"F",T:"G",U:"H",V:"I",W:"J",X:"K",Y:"L",Z:"M"};
  //get each character
  let i = 0;
  let newStr = "";
  while(i < str.length) {
    //check if character is an object key
    if(str[i].search(/[a-z]/) != -1)
    {
          newStr = newStr.concat(cipherChars[str[i]]);
    } else {
      newStr = newStr.concat(str[i]);
    }
    i++;
  }
  str = newStr;
  console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR CVMMN!");

