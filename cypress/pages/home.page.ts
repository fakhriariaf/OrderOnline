import { HomeLocator } from "../locators/home.locator";
import { BasePage } from "../pages/base.page";

const homeLocator = new HomeLocator();

export class HomePage extends BasePage {
  validateLoginSuccessByUserName(username: string) {
    homeLocator.accountUserName.should("be.visible");
    homeLocator.accountUserName.contains(username);
  }
}
