/// <reference types="cypress" />

describe("Search Test", () => {
  it("Gets, types and asserts", () => {
    cy.visit("http://localhost:3000/")

    // Get input, type into it and verify that the value has been updated
    cy.get(".MuiInputBase-input").type("silla").should("have.value", "silla")

    // Get button and click on it
    cy.get(".MuiButton-root").click()

    // Should be on a new URL which includes '/items?search=silla'
    cy.url().should("include", "/items?search=silla")
  })
})
