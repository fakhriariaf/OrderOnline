import { LoginLocator } from "../locators/login.locator";
import { BasePage } from "../pages/base.page";

const loginLocator = new LoginLocator();

export class LoginPage extends BasePage {
  login(email: string, password: string) {
    this.inputText(loginLocator.emailField, email);
    this.inputText(loginLocator.passwordField, password);
    loginLocator.masukButton.should("be.enabled");
    loginLocator.masukButton.click();
  }
}
