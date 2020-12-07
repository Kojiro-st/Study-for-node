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