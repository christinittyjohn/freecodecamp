function telephoneCheck(str) {
  // Good luck!
  //if str has anything other than 0-9,-,() and space
  //return false
  if(str.search(/[^\d\s()-]/g) != -1){
    return false;
  }
  else {
    //get all the digits
    let digits = str.match(/\d/g);
    if(digits.length <= 11 && digits.length >= 10) {
      if(digits.length == 11 && digits[0] != 1) {
        //11 digits, but 1st digit is not 1
        return false;
      }
    } else {
      //more than 11 digits
      return false;
    }
    let specialChars = str.match(/[\s-()]/g);
    //if ( is found, ) should be after 3 places
    if(str.indexOf("(") != -1){
      if(str.indexOf(")") != -1){
        if(str.indexOf(")") - str.indexOf("(") != 4){
          return false;
        }
      }
      else {
        return false;
      }
    } else {
      if(str.indexOf(")") != -1){
        return false;
      }
    }
  }
  if(!/\d/.test(str[0])){
    return false;
  }
  return true;
}

console.log(telephoneCheck("1(909)555-5555"));
