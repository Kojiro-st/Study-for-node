class Account{
  constructor(name, no, balance, day) {
    this.name = toString(name);
    this.no = no;
    this.balance = balance;
    this.day = day;
  }

  // 口座名義を調べる
  static AccountName(name){
    return name;
  }

  // 口座番号を調べる
  static AccountNo(no){
    return no;
  }

  // 預金残高を調べる
  static AccountBalance(balance){
    return balance;
  }

  // k円預ける
  static Deposit(balance, k){
    balance +=k;
    return balance;
  }

  // k円下ろす
  static Withdraw(balance, k){
    balance -=k;
    return balance;
  }

  // 口座開設日
  static MakeAccountDay(day){
    return day;
  }
}

class TimeAccount extends Account{
  constructor(timeBalance){
    super(name, no, balance)
    this.timeBalance = timeBalance;
  }

  getTimeBalance(timeBalance){
    return this.timeBalance;
  }

  static cancel(timeBalance){
    Deposit(balance, timeBalance);
    timeBalance = 0;
    return;
  }
}

class compBalance {
  // constructor(nameA, nameB, balanceA, balanceB, timeBalanceA, timeBalanceB){
    constructor(balanceA, balanceB, timeBalanceA, timeBalanceB){
    // this.nameA = toString(nameA);
    // this.nameB = toString(nameB);
    this.balanceA = balanceA;
    this.balanceB = balanceB;
    this.timeBalanceA = timeBalanceA;
    this.timeBalanceB = timeBalanceB;
  }

  static Compare(balanceA, balanceB, timeBalanceA, timeBalanceB){
    var TotalBalanceA = Account.AccountBalance(balanceA) + TimeAccount.getTimeBalance(timeBalanceA);
    var TotalBalanceB = Account.AccountBalance(balanceB) + TimeAccount.getTimeBalance(timeBalanceB);

    if(timeBalanceA>0 && timeBalanceB>0){
      if(timeBalanceA > timeBalanceB){
        return 1;
      }else if(timeBalanceA = timeBalanceB){
        return 0;
      }else{
        return -1;
      }
    }else{
      if(Account.AccountBalance(balanceA) > Account.AccountBalance(balanceB)){
        return 1;
      }else if(Account.AccountBalance(balanceA) = Account.AccountBalance(balanceB)){
        return 0;
      }else{
        return -1;
      }
    }
  }
}

var Comparison = new compBalance(500, -2,300,400);

console.log("足立君と仲田君の預金残高の比較結果です。")
switch(Comparison.Compare(500, -2,300,400)){
  case 1:
    return "足立君のほうが預金残高が多い";
  case 0:
    return "二人の預金残高は同じ";
  case -1:
    return "仲田くんのほうが預金残高が多い";
}