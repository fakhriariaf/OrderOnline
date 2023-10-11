export class HomeLocator {
  get accountUserName() {
    return cy.get(".account-user-name", { timeout: 5000 });
  }
}
