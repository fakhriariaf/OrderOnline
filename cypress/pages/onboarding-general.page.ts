import { OnboardingGeneralLocator } from "../locators/onboarding-general.locator";
import { BasePage } from "./base.page";

const onboardingGeneralLocator = new OnboardingGeneralLocator();

export class OnboardingGeneralPage extends BasePage {
  // page 1 onboarding
  fillFormOnboardingPage(
    namaToko: string,
    namaOwner: string,
    phone: string,
    alamat: string,
    lokasi: string
  ) {
    this.inputText(onboardingGeneralLocator.namaTokoField, namaToko);
    this.inputText(onboardingGeneralLocator.namaOwnerField, namaOwner);
    this.inputText(onboardingGeneralLocator.phoneField, phone);
    this.inputText(onboardingGeneralLocator.alamatField, alamat);
    this.inputText(onboardingGeneralLocator.lokasiField, lokasi);
    // onboardingGeneralLocator.selanjutnyaButton.click();
  }

  fillSecondToFourOnboardingPage(
    bank: string,
    norek: string,
    namaRekening: string,
    noKtp: string,
    kodeKupon: string
  ) {
    // page 2 onboarding
    onboardingGeneralLocator.alamatTokoSebagaiPickupChecklist.click();
    onboardingGeneralLocator.fotoTokoUpload.selectFile("cypress/fixtures/testupload.png", {
      force: true,
    });
    onboardingGeneralLocator.selanjutnyaButton.click();

    // page 3 onboarding
    onboardingGeneralLocator.bankOption.click();
    onboardingGeneralLocator.bankOptionList.contains(bank).click();
    this.inputText(onboardingGeneralLocator.nomorRekeningField, norek);
    this.inputText(onboardingGeneralLocator.namaRekeningField, namaRekening);
    onboardingGeneralLocator.bukuTabunganUpload.selectFile("cypress/fixtures/testupload.png", {
      force: true,
    });
    onboardingGeneralLocator.selanjutnyaButton.click();

    // page 4 onboarding
    // this steps got error because of OTP and can't continue

    onboardingGeneralLocator.fotoKTPUpload.selectFile("cypress/fixtures/testupload.png", {
      force: true,
    });

    this.inputText(onboardingGeneralLocator.NIKField, noKtp);
    this.inputText(onboardingGeneralLocator.kodeKuponField, kodeKupon);
  }
}
