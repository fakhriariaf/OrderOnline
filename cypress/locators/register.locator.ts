export class RegisterLocator {
  get nameField() {
    return cy.get("input[name='name']", { timeout: 3000 });
  }

  get emailField() {
    return cy.get("input[name='email']");
  }

  get passwordField() {
    return cy.get("input[name='password']");
  }

  get noHpField() {
    return cy.get("input[name='phone']");
  }

  get daftarButton() {
    return cy.get("button[type='submit']");
  }

  get emailVerificationSentToMessage() {
    return cy.get("p.text-muted b");
  }

  get emailVerificationSentMessage() {
    return cy.get("p.text-muted").first();
  }
}
