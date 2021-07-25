Feature("login");

Scenario("Log to etalente", ({ I }) => {
  I.amOnPage("https://etalente.co.za/");
  I.see("Account");
  I.fillField("#mat-input-0", "alric9382@gmail.com");
  I.fillField("#mat-input-1", "Mathilde07");
  I.click("Login");
  I.see("Jasper");
});

Scenario("Fail to Log to etalente", ({ I }) => {
  I.amOnPage("https://etalente.co.za/");
  I.see("Account");
  I.fillField("username", "alric9382@gmail.com");
  I.fillField("password", "Mathilde07");
  I.click("Login");
  I.see("Jasper");
});
