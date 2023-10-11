import { RegisterLocator } from "../locators/register.locator";
import { BasePage } from "../pages/base.page";

const registerLocator = new RegisterLocator();
const basePage = new BasePage();
const uniqueName = basePage.generateNameTimestamp("user");

function generateRandomPhoneNumber() {
  var operators = [
    "0811", "0812", "0813", "0821", "0822", // Telkomsel
    "0831", "0832", "0838", // Indosat Ooredoo
    "0852", "0853", "0851", "0859", // XL Axiata
    "0895", "0896", "0897", "0898", // Tri
    "0814", "0815", "0816", "0855", "0856", "0857", // Smartfren
    "0881", "0882", "0883", "0884", "0885", "0886", "0887", "0888" // Axis
  ];

  var randomOperatorIndex = Math.floor(Math.random() * operators.length)
  var operatorPrefix = operators[randomOperatorIndex];

  var phoneNumber = operatorPrefix;

  for (var i = 0; i < 6; i++) {
    phoneNumber += Math.floor(Math.random() * 10)
  }

  return phoneNumber;
}

const phoneNumber = generateRandomPhoneNumber()

export class RegisterPage extends BasePage {
  register() {
    this.inputText(registerLocator.nameField, uniqueName);
    this.inputText(registerLocator.emailField, `${uniqueName}@gmail.com`);
    this.inputText(registerLocator.passwordField, Cypress.env("registered_password"));
    this.inputText(registerLocator.noHpField, phoneNumber );
    registerLocator.daftarButton.should("be.enabled");
    registerLocator.daftarButton.click();
    cy.log("regis: " + uniqueName);
  }

  validateEmailVerification(message: string) {
    cy.log("validate: " + uniqueName);
    registerLocator.emailVerificationSentMessage.contains(message);
    registerLocator.emailVerificationSentToMessage.contains(`${uniqueName}@gmail.com`);
  }
}
