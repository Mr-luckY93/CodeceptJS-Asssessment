Feature("login");

let email = "";
let password = "";

Scenario("Log to etalente", ({ I }) => {
  I.amOnPage("https://etalente.co.za/");
  I.see("Account");
  I.fillField("#mat-input-0", email);
  I.fillField("#mat-input-1", password);
  I.click("Login");
  I.see("Jasper");
});

Scenario("Fail to Log to etalente", ({ I }) => {
  I.amOnPage("https://etalente.co.za/");
  I.see("Account");
  I.fillField("username", password);
  I.fillField("password", password);
  I.click("Login");
  I.see("Jasper");
});
