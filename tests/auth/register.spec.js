import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import { SignupLoginPage } from '../../pages/SignupLoginPage.js';
import { SignupPage } from '../../pages/SignupPage.js';
import { AccountPage } from '../../pages/AccountPage.js';
import { createNewUser } from '../../fixtures/users.js';

test.describe('User Registration', () => {
  /** @type {HomePage} */
  let homePage;
  /** @type {SignupLoginPage} */
  let signupLoginPage;
  /** @type {SignupPage} */
  let signupPage;
  /** @type {AccountPage} */
  let accountPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signupLoginPage = new SignupLoginPage(page);
    signupPage = new SignupPage(page);
    accountPage = new AccountPage(page);

    await test.step('Launch browser and navigate to home page', async () => {
      await homePage.open();
      await expect(homePage.logo).toBeVisible();
      await expect(homePage.featuresHeading).toBeVisible();
    });
  });

  test('should register a new user account and then delete it', async () => {
    const newUser = createNewUser();

    await test.step('Navigate to Signup / Login page', async () => {
      await homePage.goToSignupLogin();
      await expect(signupLoginPage.newUserSignupHeading).toBeVisible();
    });

    await test.step('Enter name and email, then submit signup form', async () => {
      await signupLoginPage.signup(newUser.name, newUser.email);
      await expect(signupPage.accountInfoHeading).toBeVisible();
    });

    await test.step('Fill account information', async () => {
      await signupPage.fillAccountInformation(newUser);
      await signupPage.fillAddressInformation(newUser);
    });

    await test.step('Create account', async () => {
      await signupPage.createAccount();
      await expect(accountPage.accountCreatedHeading).toBeVisible();
    });

    await test.step('Continue after account creation', async () => {
      await accountPage.clickContinue();
      await expect(homePage.loggedInAsUser(newUser.name)).toBeVisible();
    });

    await test.step('Delete the created account', async () => {
      await homePage.goToDeleteAccount();
      await expect(accountPage.accountDeletedHeading).toBeVisible();
    });

    await test.step('Continue after account deletion', async () => {
      await accountPage.clickContinue();
      await expect(homePage.logo).toBeVisible();
    });
  });
});
