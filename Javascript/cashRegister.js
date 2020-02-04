function checkCashRegister(price, cash, cid) {
  var change1 = {status:"",change:[]};
  let currency = {"PENNY":0.01,"NICKEL":0.05,"DIME":0.1,"QUARTER":0.25,"ONE":1,"FIVE":5,"TEN":10,"TWENTY":20,"ONE HUNDRED":100};
  // Here is your change, ma'am.
  let difference = price - cash;
  if(difference < 0) {
    difference *= -1;
  }
  let i = cid.length - 1;
  let totalCID = 0;
  while(i >= 0){
    totalCID+=cid[i][1];
    i--;
  }
  if(totalCID == difference){
    change1.status = "CLOSED";
    change1.change = cid;
    return change1;
  }
  i = cid.length - 1;
  while(i >= 0 && difference >= 0) {
    if(difference >= currency[cid[i][0]]){
      if(difference >= cid[i][1]){
        difference -= cid[i][1];
        change1.change.push([cid[i][0],cid[i][1]]);
        cid[i][1] -= cid[i][1];
      } else {
        let subtractWith = difference - difference % currency[cid[i][0]];
        change1.change.push([cid[i][0],subtractWith]);
        difference -= subtractWith;
        cid[i][1] -= subtractWith;
      }
    }
    difference = Number(difference.toPrecision(4));
    i--;
  }
  if(difference > 0){
      change1.status = "INSUFFICIENT_FUNDS"
      change1.change = [];
  } else if(difference == 0) {
    change1.status = "OPEN";
  }
  console.log(change1);
  return change1;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
