const users = [
  {
    id: "USER-001",
    balance: 1000,
  },
];

class Utils {
  validateEmail(email: string): RegExpMatchArray | null {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  }

  getUserWalletBalance(userId: string): number | undefined {
    return users.find((user) => user.id === userId)?.balance;
  }
}

class Email {
  validateEmail(email: string): RegExpMatchArray | null {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  }
}

class User {
  balance: number;
  constructor() {
    this.balance = 100;
  }

  getWalletBalance(): number {
    return this.balance;
  }
}
