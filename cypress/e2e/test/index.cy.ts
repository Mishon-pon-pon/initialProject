/// <reference types="cypress" />

describe("Test Features", () => {
  beforeEach(() => {});
  it("Test Increment", () => {
    cy.visit("http://localhost:3000/#/test");
    const incrementButton = cy.get(
      "#root > div > div > div > div:nth-child(2) > div:nth-child(2) > span > div > button"
    );

    incrementButton.click();

    cy.get(
      "#root > div > div > div > div:nth-child(2) > div:nth-child(2) > section > main"
    ).should("have.text", "1");

    incrementButton.click();
    incrementButton.click();
    cy.get(
      "#root > div > div > div > div:nth-child(2) > div:nth-child(2) > section > main"
    ).should("have.text", "3");
  });

  it("Test decrement", () => {
    cy.visit("http://localhost:3000/#/test");
    const decrementButton = cy.get(
      "#root > div > div > div > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > button"
    );

    cy.get(
      "#root > div > div > div > div:nth-child(3) > div:nth-child(2) > section > main"
    ).should("have.text", "0");

    decrementButton.click();
    decrementButton.click();

    cy.get(
      "#root > div > div > div > div:nth-child(3) > div:nth-child(2) > section > main"
    ).should("have.text", "-2");
  });
});
