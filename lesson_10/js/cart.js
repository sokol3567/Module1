'use strict'

const cart = {
    items: [],
    totalPrice: 0,
    get total() {
        return this.calculateItemPrice();
    },
    count: 0,
    add (name, price, countProduct = 1) {
      const item = {
        name: name,
        price: price,
        countProduct: countProduct,
      };
        this.items.push(item);
        this.increaseCount(100);
        return item;
    },
    increaseCount (num) {
        return this.count = num + this.items.reduce((sum, item) => sum + item.countProduct,0);
    },
    calculateItemPrice () {
            return this.items.reduce((sum, item) => sum + item.price,0);
    },
    clear () {
        // this.items.splice(0,cart.items.length);
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;        
    },
    print () {
        const arrItems = JSON.stringify(this.items)
        console.log(arrItems);
    },
}



cart.add('cucumber',3500, 12);
cart.add('milk',115, 25);
cart.add('fish',1200, 13);
cart.print();
console.log(cart.total);