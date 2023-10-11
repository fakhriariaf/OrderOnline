import { ResePasswordPage } from "../../pages/reset-password.page";

const resetPasswordPage = new ResePasswordPage();

describe("Reset Password Page", function () {
  beforeEach(function () {
    resetPasswordPage.visit();
    resetPasswordPage.accessResetPassword();
  });

  it("have correct url", function () {
    resetPasswordPage.validateUrlContain("/password/reset");
  });

  it("requested reset password will send link", function () {
    resetPasswordPage.resetPassword("fakhri.dargawireja2@gmail.com");
    resetPasswordPage.validateResetPasswordLinkSuccess(
      "Kami sudah mengirimkan link untuk reset password Anda. Tolong cek email Anda!",
      "Gagal mengirim email, karena anda sudah melakukan banyak percobaan reset password"
    );
  });
});
