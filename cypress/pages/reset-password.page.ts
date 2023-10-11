import { LoginLocator } from "../locators/login.locator";
import { ResetPasswordLocator } from "../locators/reset-password.locator";
import { BasePage } from "../pages/base.page";

const loginLocator = new LoginLocator();
const resetPasswordLocator = new ResetPasswordLocator();

export class ResePasswordPage extends BasePage {
  accessResetPassword() {
    loginLocator.lupaPasswordLink.click({ force: true });
  }

  resetPassword(email: string) {
    resetPasswordLocator.emailField.type(email);
    resetPasswordLocator.resetPasswordButton.click();
  }

  validateResetPasswordLinkSuccess(message: string, error: string) {
    resetPasswordLocator.resetPasswordMessage.then(($value) => {
      const textValue = $value.text();
      cy.log(textValue.toString());
      if (textValue.toString().trim() === message.trim()) {
        resetPasswordLocator.resendResetPasswordLink.should("be.visible");
      } else {
        resetPasswordLocator.resetPasswordMessage.contains(error);
      }
    });
  }
}
