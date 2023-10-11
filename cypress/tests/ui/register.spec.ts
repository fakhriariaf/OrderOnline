import { RegisterPage } from "../../pages/register.page";
import { LoginLocator } from "../../locators/login.locator";

const registerPage = new RegisterPage();
const loginLocator = new LoginLocator();

describe("Register Regular Page", function () {
  beforeEach(function () {
    registerPage.visit();
    loginLocator.daftarLink.click();
  });

  it("have correct url", function () {
    registerPage.validateUrlContain("/register");
  });

  it("register is success", function () {
    registerPage.register();
    registerPage.validateEmailVerification("We've send an email verification to");
  });
});
