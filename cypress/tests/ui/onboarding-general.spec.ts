import { OnboardingGeneralPage } from "../../pages/onboarding-general.page";
import { LoginPage } from "../../pages/login.page";

const onboardingGeneralPage = new OnboardingGeneralPage();
const loginPage = new LoginPage();

describe("Onboarding general Page", function () {
  beforeEach(function () {
    loginPage.visit();
    loginPage.login(
      Cypress.env("onboarding_general_email"),
      Cypress.env("onboarding_general_password"),
    );

    // do login by API to get token
    cy.loginByApi(
      Cypress.env("onboarding_general_email"),
      Cypress.env("onboarding_general_password"),
      Cypress.env("x_api_key")
    )
      .then((response) => {
        const apiToken = response.body.data.access_token;
        return apiToken;
      })
      .then((apiToken) => {
        cy.log("ini token: " + apiToken);
        // update step onboarding
        cy.request({
          method: "PUT",
          url: `${Cypress.env("apiUrl")}/settings/onboarding-step`,
          headers: {
            "x-api-key": Cypress.env("x_api_key"),
            Authorization: `Bearer ${apiToken}`,
          },
          body: {
            step: 0,
          },
        }).then(() => {
          // check warehouse if exist then delete
          cy.request({
            method: "GET",
            url: `${Cypress.env("apiUrl")}/warehouses`,
            headers: {
              "x-api-key": Cypress.env("x_api_key"),
              Authorization: `Bearer ${apiToken}`,
            },
          })
            .then((response) => {
              try {
                const warehouse_id = response.body.data[0]._id;
                return warehouse_id;
              } catch (e) {
                cy.log("warehouse id is null or undefined.");
              }
            })
            .then((warehouse_id) => {
              if (warehouse_id !== null && warehouse_id !== undefined) {
                // delete warehouse by id
                cy.request({
                  method: "DELETE",
                  url: `${Cypress.env("apiUrl")}/warehouses/${warehouse_id}`,
                  headers: {
                    "x-api-key": Cypress.env("x_api_key"),
                    Authorization: `Bearer ${apiToken}`,
                  },
                });
              } else {
                cy.log("warehouse id is null or undefined.");
              }
            });
        });
      });
  });

  it("Filled Onboard Page 1", function () {
    onboardingGeneralPage.fillFormOnboardingPage(
      "toko Testing",
      "Fakhri Testing",
      "081221723223",
      "Jl.bhayangkara RT.002/008 No. 140",
      "Jawa Barat, Kota Bandung, Arcamanik"
    );
  });

  it("Second to fourth form can be filled", function () {
    onboardingGeneralPage.fillSecondToFourOnboardingPage(
      "BCA",
      "534261452",
      "fakhri testing",
      "123652820023",
      "kodekupon"
    );
  });
});

