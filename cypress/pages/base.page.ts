export class BasePage {
  visit() {
    cy.visit("/");
  }

  validateUrlContain(url: string) {
    cy.url().should("include", url);
  }

  inputText(locator: Cypress.Chainable<JQuery<HTMLElement>>, text: string) {
    locator.clear({ force: true }).type(text);
  }

  validateAlertTextContain(locator: Cypress.Chainable<JQuery<HTMLElement>>, text: string) {
    locator.contains(text);
  }

  validateElmentDisabled(locator: Cypress.Chainable<JQuery<HTMLElement>>) {
    locator.should("be.disabled");
  }

  generateNameTimestamp(prefix: string): string {
    const timestamp = new Date().getTime(); // Get current timestamp in milliseconds
    const name = `${prefix}_${timestamp}`;
    return name;
  }
}
