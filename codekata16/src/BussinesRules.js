const SHIPPING_PACKING_SLIP_TYPE = "SHIPPING_PACKING_SLIP_TYPE";
const ROYALTIES_PACKING_SLIP_TYPE = "ROYALTIES_PACKING_SLIP_TYPE";
const packingSlips = {
  SHIPPING: SHIPPING_PACKING_SLIP_TYPE,
  ROYALTIES: ROYALTIES_PACKING_SLIP_TYPE,
};
const PHYSICAL_PRODUCT_TYPE = "PHYSICAL_PRODUCT_TYPE";
const BOOK_PRODUCT_TYPE = "BOOK_PRODUCT_TYPE";
const MEMBERSHIP_PRODUCT_TYPE = "MEMBERSHIP_PRODUCT_TYPE";
const products = {
  PHYSICAL: PHYSICAL_PRODUCT_TYPE,
  BOOK: BOOK_PRODUCT_TYPE,
  MEMBERSHIP: MEMBERSHIP_PRODUCT_TYPE,
};
const _processMembership = (membership) => {
  membership.active = true;
  return membership;
};
const processPayment = (product) => {
  switch (product.type) {
    case products.PHYSICAL:
      return [packingSlips.SHIPPING, "agent_comission"];
    case products.MEMBERSHIP:
      _processMembership(product);
      return [];
    case products.BOOK:
      return [packingSlips.SHIPPING, packingSlips.ROYALTIES, "agent_comission"];
    default:
      throw new TypeError(`type of product: ${product} - NOT IMPLEMENTED!!`);
  }
};
