export class ResetPasswordLocator {
  get emailField() {
    return cy.get("input[name='email']", { timeout: 5000 });
  }

  get resetPasswordButton() {
    return cy.get("button[type='submit']").contains("Reset Password");
  }

  get resetPasswordMessage() {
    return cy.get("div[role='alert']");
  }

  get resendResetPasswordLink() {
    return cy.get(".a-link");
  }
}
