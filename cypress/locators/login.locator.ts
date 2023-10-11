export class LoginLocator {
  get emailField() {
    return cy.get("input[name='email']");
  }

  get passwordField() {
    return cy.get("input[name='password']");
  }

  get masukButton() {
    return cy.get("button[type='submit']", { timeout: 3000 });
  }

  get daftarLink() {
    return cy.get("b.text-danger");
  }

  get lupaPasswordLink() {
    return cy.get(".float-end");
  }

  get loginAlert() {
    return cy.get("div[role='alert']");
  }

  get emailAlert() {
    return cy.get("span[role='alert']");
  }
}
