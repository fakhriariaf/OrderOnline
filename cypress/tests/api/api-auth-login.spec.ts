describe("Auth Login API", function () {
  context("POST /auth/member/login", function () {
    const Failedapikey = "16176172t12"

    it("user login success", function () {
      cy.loginByApi(Cypress.env("registered_email"), Cypress.env("registered_password"),Cypress.env("x_api_key")).then(
        (response) => {
          expect(response.status).to.eq(200);
          expect(response.body.message).to.equal("Login success");
          expect(response.body.error_code).to.equal(0);
          expect(response.body.data.access_token).to.not.be.empty;
        }
      );
    });

    it("user failed login when api key invalid", function () {
      cy.loginByApi(Cypress.env("registered_email"), Cypress.env("registered_password"), Failedapikey ).then(
        (response) => {
          expect(response.status).to.eq(401);
          expect(response.body.message).to.equal("Invalid Api Key");
          expect(response.body.error_code).to.equal(0);
        }
      );
    });

    it("user failed login when api key null", function () {
      cy.loginByApi(Cypress.env("registered_email"), Cypress.env("registered_password"), undefined ).then(
        (response) => {
          expect(response.status).to.eq(401);
          expect(response.body.message).to.equal("API Key tidak tersedia");
          expect(response.body.error_code).to.equal(0);
        }
      );
    });

    it("user failed login when email undefined", function () {
      cy.loginByApi( undefined, Cypress.env("registered_password"), Cypress.env("x_api_key") ).then(
        (response) => {
          expect(response.status).to.eq(400);
          expect(response.body.message).to.equal("The email field is required.");
          expect(response.body.error_code).to.equal(0);
        }
      );
    });

    it("user failed login when password undefined", function () {
      cy.loginByApi(Cypress.env("registered_email"), undefined, Cypress.env("x_api_key") ).then(
        (response) => {
          expect(response.status).to.eq(400);
          expect(response.body.message).to.equal("The password field is required.");
          expect(response.body.error_code).to.equal(0);
        }
      );
    });

    it("user failed login when email malformed", function () {
      cy.loginByApi( "1234gmail.com", Cypress.env("registered_password"), Cypress.env("x_api_key") ).then(
        (response) => {
          expect(response.status).to.eq(400);
          expect(response.body.message).to.equal("The email must be a valid email address.");
          expect(response.body.error_code).to.equal(0);
        }
      );
    });

    it("user failed login when password invalid", function () {
      cy.loginByApi(Cypress.env("registered_email"), "1234567" , Cypress.env("x_api_key") ).then(
        (response) => {
          expect(response.status).to.eq(400);
          expect(response.body.message).to.equal("Kombinasi email dan password salah");
          expect(response.body.error_code).to.equal(0);
        }
      );
    });
  });
});

