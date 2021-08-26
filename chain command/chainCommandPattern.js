// *** Chain Command Pattern

// Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.
// Chain the receiving objects and pass the request along the chain until an object handles it.

export class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(p) {
      this.products.push(p);
    }
  }
  
export  class Discount {
    calc(products) {
      let ndiscount = new NumberDiscount();
      let pdiscount = new PriceDiscount();
      let none = new NoneDiscount();
      ndiscount.setNext(pdiscount);
      pdiscount.setNext(none);
  
      return ndiscount.exec(products);
    }
  }
  
  class NumberDiscount {
    constructor() {
      this.next = null;
    }
  
    setNext(fn) {
      this.next = fn;
    }
  
    exec(products) {
      let result = 0;
      if (products.length > 3) result = 0.05;
  
      return result + this.next.exec(products);
    }
  }
  
  class PriceDiscount {
    constructor() {
      this.next = null;
    }
  
    setNext(fn) {
      this.next = fn;
    }
  
    exec(products) {
      let result = 0;
      let total = products.reduce((a, b) => a + b);
  
      if (total >= 500) result = 0.1;
  
      return result + this.next.exec(products);
    }
  }
  
  class NoneDiscount {
    exec() {
      return 0;
    }
  }
  
 