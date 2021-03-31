const createShoppingCart = () => ({
  items: {},
  add(product) {
    if (this.items[product.id] == null) {
      this.items[product.id] = { quantity: 1, value: product };
      return this.items;
    }
    this.items[product.id] = {
      ...this.items[product.id],
      quantity: this.items[product.id].quantity + 1,
    };
  },
  remove(product) {
    if (this.items[product.id] == null) {
      return this.items;
    }
    if (this.items[product.id].quantity === 1) {
      delete this.items[product.id];
      return this.items;
    }
    this.items[product.id] = {
      ...this.items[product.id],
      quantity: this.items[product.id].quantity - 1,
    };
    return this.items;
  },
  clear() {
    this.items = {};
  },
  toJSON() {
    return JSON.stringify(this.items);
  },
  get total() {
    let sum = 0;
    let products = Object.values(this.items);
    for (let product of products) {
      sum += product.value.price;
    }
    return sum;
  },
});
