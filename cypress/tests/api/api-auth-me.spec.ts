const apiMe = `${Cypress.env("apiUrl")}/auth/member/me`;

describe("Auth Login API", function () {
  let apiToken = "";

  before(function () {
    cy.loginByApi(Cypress.env("registered_email"), Cypress.env("registered_password"),Cypress.env("x_api_key")).then(
      (response) => {
        return (apiToken = response.body.data.access_token);
      }
    );
  });

  context("GET /auth/member/me", function () {
    it("user have information detail", function () {
      cy.request({
        method: "GET",
        url: `${apiMe}`,
        headers: {
          "x-api-key": Cypress.env("x_api_key"),
          Authorization: "Bearer " + apiToken,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.error_code).to.equal(0);
        expect(response.body.data).to.not.be.empty;
      });
    });

    it("user failed get information detail when api key is null", function () {
      cy.request({
        method: "GET",
        url: `${apiMe}`,
        headers: {
          "x-api-key": null,
          Authorization: "Bearer " + apiToken,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.error_code).to.equal(0);
        expect(response.body.message).to.eq("Invalid Api Key")
        expect(response.body.data).to.eq('');
      });
    });

    it("user failed get information detail when auth is null", function () {
      cy.request({
        method: "GET",
        url: `${apiMe}`,
        headers: {
          "x-api-key": Cypress.env("x_api_key"),
          Authorization: null ,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.error_code).to.equal(0);
        expect(response.body.data).to.equal('')
      });
    });

    it("user failed get information detail when auth undefined ", function () {
      cy.request({
        method: "GET",
        url: `${apiMe}`,
        headers: {
          "x-api-key": Cypress.env("x_api_key"),
          Authorization: undefined ,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.error_code).to.equal(0);
        expect(response.body.data).to.equal('')
      });
    });

    it("user failed get information detail when auth invalid ", function () {
      cy.request({
        method: "GET",
        url: `${apiMe}`,
        headers: {
          "x-api-key": Cypress.env("x_api_key"),
          Authorization: "invalid" ,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.error_code).to.equal(0);
        expect(response.body.data).to.equal('')
      });
    });
  });
});
