describe("Bussiness rules (https://codekata.com/kata/kata16-business-rules)", () => {
  describe("Procesando un pago", () => {
    it("lanza un error si el producto no esta implementado", () => {
      expect(() => processPayment("NOT_IMPLEMENTED_PRODUCT")).toThrowError(
        TypeError
      );
    });
    describe("por un producto físico", () => {
      let result = null;
      beforeEach(() => {
        const physicalProduct = { type: products.PHYSICAL };
        result = processPayment(physicalProduct);
      });
      it("debe generar 1 albarán", () => {
        expect(result).toContain(packingSlips.SHIPPING);
      });
      it("no debe generar 1 albarán para el departamento de royalties", () => {
        expect(result).not.toContain("royalty_packing_slip");
      });
      it("debe generar una comisión de pagos para el agente", () => {
        expect(result).toContain("agent_comission");
      });
    });
    describe("por un libro", () => {
      it("debe generar una comisión de pagos para el agente", () => {
        const book = { type: products.BOOK };
        const result = processPayment(book);
        expect(result).toContain("agent_comission");
      });
      it("debe generar un albarán por duplicado", () => {
        const book = { type: products.BOOK };
        const result = processPayment(book);
        expect(result).toContain(packingSlips.SHIPPING);
        expect(result).toContain(packingSlips.ROYALTIES);
      });
    });
    describe("por una membresía", () => {
      let membership = null;
      beforeEach(() => {
        membership = { active: false, type: products.MEMBERSHIP };
      });
      it("no debe generar albarán", () => {
        const result = processPayment(membership);
        expect(result).not.toContain(packingSlips.SHIPPING);
        expect(result).not.toContain(packingSlips.ROYALTIES);
      });
      it("no debe generar comisión para el agente", () => {
        const result = processPayment(membership);
        expect(result).not.toContain("agent_comission");
      });
      it("debe activar la membresía", () => {
        processPayment(membership);
        expect(membership.active).toEqual(true);
      });
      it("debe enviar un email", () => {
        expect(true).toEqual(false);
      });
    });
  });
});
