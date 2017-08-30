var bankAccount = {};

bankAccount["name"]= "Carter";
bankAccount["balance"]=1000;
var withdraw = prompt ("How much do you want to withdraw?");
bankAccount["balance"]-=withdraw;
window.alert(bankAccount.balance);
