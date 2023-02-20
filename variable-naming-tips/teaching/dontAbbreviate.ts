interface Item {
  id: string;
  name: string;
  stock: number;
  price: number;
}

interface CheckoutInfo {
  status: boolean;
  change?: number;
  message?: string;
}

class Shop {
  private itemList: Item[];
  private merchantBalance: number;

  constructor() {
    this.itemList = [
      {
        id: "ITEM-001",
        name: "Sabun",
        stock: 10,
        price: 3,
      },
      {
        id: "ITEM-002",
        name: "Shampoo",
        stock: 0,
        price: 1,
      },
      {
        id: "ITEM-003",
        name: "Chocolate",
        stock: 3,
        price: 2,
      },
    ];
    this.merchantBalance = 1000;
  }
  private getItemStock(itemId: string): number {
    const item = this.itemList.find((item) => item.id === itemId);
    if (!item) return 0;
    return item.stock;
  }

  private getItemTotalPrice(itemId: string, itemAmount: number): number {
    const item = this.itemList.find((item) => item.id === itemId);
    if (!item) return 0;
    return item.price * itemAmount;
  }

  private reduceItemStockByOne(itemId: string) {
    const itemIndex = this.itemList.findIndex((item) => item.id === itemId);
    if (itemIndex > -1) this.itemList[itemIndex].stock -= 1;
  }

  checkoutItem(itemId: string, paid: number, itemAmount: number): CheckoutInfo {
    const stock = this.getItemStock(itemId);
    if (itemAmount > stock)
      return {
        status: false,
        message: "Out of stock",
      };

    const change = paid - this.getItemTotalPrice(itemId, itemAmount);
    if (change >= 0) {
      this.reduceItemStockByOne(itemId);
      this.merchantBalance += paid - change;
      return {
        status: true,
        change: change,
        message: "Success",
      };
    } else
      return {
        status: false,
        message: "Not enough funds!",
      };
  }
}

const kelontong = new Shop();
console.log(kelontong.checkoutItem("ITEM-001", 1000, 11));


// Abbreviated mess
// interface Itm {
//   id: string;
//   n: string;
//   s: number;
//   p: number;
// }

// interface CINF {
//   s: boolean;
//   c?: number;
//   m?: string;
// }

// class Shop {
//   private itml: Itm[];
//   private mcb: number;

//   constructor() {
//     this.itml = [
//       {
//         id: "ITEM-001",
//         n: "Sabun",
//         s: 10,
//         p: 3,
//       },
//       {
//         id: "ITEM-002",
//         n: "Shampoo",
//         s: 0,
//         p: 1,
//       },
//       {
//         id: "ITEM-003",
//         n: "Chocolate",
//         s: 3,
//         p: 2,
//       },
//     ];
//     this.mcb = 1000;
//   }
//   private gis(itmid: string): number {
//     const itm = this.itml.find((itm) => itm.id === itmid);
//     if (!itm) return 0;
//     return itm.s;
//   }

//   private gitp(itmid: string, itma: number): number {
//     const itm = this.itml.find((itm) => itm.id === itmid);
//     if (!itm) return 0;
//     return itm.p * itma;
//   }

//   private risbo(itmid: string) {
//     const itmi = this.itml.findIndex((itm) => itm.id === itmid);
//     if (itmi > -1) this.itml[itmi].s -= 1;
//   }

//   citm(itmid: string, p: number, itma: number): CINF {
//     const s = this.gis(itmid);
//     if (itma > s)
//       return {
//         s: false,
//         m: "Out of stock",
//       };

//     const c = p - this.gitp(itmid, itma);
//     if (c >= 0) {
//       this.risbo(itmid);
//       this.mcb += p - c;
//       return {
//         s: true,
//         c: c,
//         m: "Success",
//       };
//     } else
//       return {
//         s: false,
//         m: "Not enough funds!",
//       };
//   }
// }

// const kelontong = new Shop();
// console.log(kelontong.citm("ITEM-001", 1000, 11));
