describe("search products", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to search for products", () => {
    cy.get("input[name=q]").type("moletom").parent("form").submit();

    cy.get('a[href^="/product"]').first().click();

    cy.location("pathname").should("include", "/product");

    cy.contains("Adicionar ao carrinho").click();

    cy.contains("Cart (1)").should("exist");
  });
});
