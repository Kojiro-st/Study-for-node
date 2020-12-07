class Account{
  constructor(name, no, balance) {
    this.name = toString(name);
    this.no = no;
    this.balance = balance;
    console.log("明解銀行での口座開設ありがとうございます。");
  }

  // 口座名義を調べる
  AccountName(name){
    return name;
  }

  // 口座番号を調べる
  AccountNo(no){
    return no;
  }

  // 預金残高を調べる
  AccountBalance(balance){
    return balance;
  }

  // k円預ける
  Deposit(balance, k){
    balance +=k;
    return balance;
  }

  // k円下ろす
  Withdraw(balance, k){
    balance -=k;
    return balance;
  }
}