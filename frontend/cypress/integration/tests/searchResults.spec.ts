/// <reference types="cypress" />

describe("SearchResults Test", () => {
  it("Get results, go to product and asserts", () => {
    cy.visit("http://localhost:3000/items?search=silla")

    // Get button and click on it
    cy.get("#item-picture-0").click()

    // Should be on a new URL which includes '/item/'
    cy.url().should("include", "/item/")
  })
})
