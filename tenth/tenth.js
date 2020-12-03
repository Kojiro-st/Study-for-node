class Account{
  constructor(name, no, balance) {
    this.name = toString(name);
    this.no = no;
    this.balance = balance;
    console.log("明解銀行での口座開設ありがとうございます。");
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
}