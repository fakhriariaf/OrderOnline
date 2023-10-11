export class OnboardingGeneralLocator {
  // onboarding page 1
  get namaTokoField() {
    return cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .form-control', { timeout: 5000 });
  }

  get namaOwnerField() {
    return cy.get(':nth-child(2) > .form-control', { timeout: 5000 });
  }

  get phoneField() {
    return cy.get(':nth-child(2) > .col-md-6 > .form-control', { timeout: 5000 });
  }

  get alamatField() {
    return cy.get(':nth-child(3) > .col-md-12 > .form-control', { timeout: 5000 });
  }

  get lokasiField() {
    return cy.get('.multiselect__single');
  }

  get selanjutnyaButton() {
    return cy.get(".flex button[type='submit']");
  }

  // onboarding page 2
  get alamatTokoSebagaiPickupChecklist() {
    return cy.get("#store-address");
  }

  get fotoTokoUpload() {
    return cy.get("input[name='file']");
  }

  // onboarding page 3
  get bankOption() {
    return cy.get(".form-label").contains("Bank", { timeout: 5000 }).next("div > div");
  }

  get bankOptionList() {
    return cy.get(".multiselect__option > span");
  }

  get nomorRekeningField() {
    return cy.get("input[name='account_number']");
  }

  get namaRekeningField() {
    return cy.get("input[name='account_name']");
  }

  get bukuTabunganUpload() {
    return cy.get("input[name='file']");
  }

  // onboarding page 4
  get fotoKTPUpload() {
    return cy.get("input[name='file']");
  }

  get NIKField() {
    return cy.get(".oex-input").first();
  }

  get kodeKuponField() {
    return cy.get("input[placeholder='Masukkan kode kupon...']");
  }
}
