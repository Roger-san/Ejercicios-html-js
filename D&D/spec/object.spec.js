describe("shoppingCart", () => {
  let shoppingCart = null;
  let product = null;
  beforeEach(() => {
    shoppingCart = createShoppingCart();
    product = {
      id: 0,
      name: "Pepsi",
      price: 9.99,
    };
  });
  it("permite añadir productos", () => {
    shoppingCart.add(product);
    expect(Object.values(shoppingCart.items)).toHaveSize(1);
  });
  it("permite incrementar la cantidad de un mismo producto", () => {
    shoppingCart.add(product);
    shoppingCart.add(product);
    expect(shoppingCart.items[product.id].quantity).toEqual(2);
  });
  it("permite decrementar la cantidad de un mismo producto", () => {
    shoppingCart.add(product);
    shoppingCart.add(product);
    shoppingCart.remove(product);
    expect(shoppingCart.items[product.id].quantity).toEqual(1);
  });
  it("si al decrementar un producto solo existe uno, este sale de la lista de items", () => {
    shoppingCart.add(product);
    shoppingCart.remove(product);
    expect(Object.values(shoppingCart.items)).toHaveSize(0);
  });
  it("permite consultar el precio total del carrito", () => {
    shoppingCart.add(product);
    shoppingCart.add({ ...product, id: 1, name: "Pan" });
    expect(shoppingCart.total).toEqual(19.98);
  });
  it("permite borrar todos los productos", () => {
    shoppingCart.add(product);
    shoppingCart.clear();
    expect(Object.values(shoppingCart.items)).toHaveSize(0);
  });
  it("permite salvar los productos en JSON", () => {
    shoppingCart.add(product);
    expect(shoppingCart.toJSON()).toEqual(JSON.stringify(shoppingCart.items));
  });
});
