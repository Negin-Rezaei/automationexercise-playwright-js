import { BasePage } from './BasePage.js';

// The account/address form on this site has duplicate/inconsistent <label for="">
// associations (e.g. both City and Zipcode point to id="city"), so getByLabel()
// cannot reliably target every field. The site exposes stable data-qa attributes
// specifically for automation, which are used here instead of brittle label text.
/**
 * Represents the Signup page (account and address information form).
 * Contains UI interactions and reusable actions for the specific page.
 */
export class SignupPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page instance.
   */
  constructor(page) {
    super(page);
    this.accountInfoHeading = page.getByRole('heading', { name: 'Enter Account Information' });

    this.titleMr = page.getByLabel('Mr.', { exact: true });
    this.titleMrs = page.getByLabel('Mrs.', { exact: true });
    this.nameInput = page.locator('[data-qa="name"]');
    this.emailInput = page.locator('[data-qa="email"]');
    this.passwordInput = page.locator('[data-qa="password"]');
    this.daySelect = page.locator('[data-qa="days"]');
    this.monthSelect = page.locator('[data-qa="months"]');
    this.yearSelect = page.locator('[data-qa="years"]');
    this.newsletterCheckbox = page.getByLabel('Sign up for our newsletter!', { exact: true });
    this.specialOffersCheckbox = page.getByLabel('Receive special offers from our partners!', { exact: true });

    this.firstNameInput = page.locator('[data-qa="first_name"]');
    this.lastNameInput = page.locator('[data-qa="last_name"]');
    this.companyInput = page.locator('[data-qa="company"]');
    this.addressInput = page.locator('[data-qa="address"]');
    this.address2Input = page.locator('[data-qa="address2"]');
    this.countrySelect = page.locator('[data-qa="country"]');
    this.stateInput = page.locator('[data-qa="state"]');
    this.cityInput = page.locator('[data-qa="city"]');
    this.zipcodeInput = page.locator('[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');
    this.createAccountButton = page.locator('[data-qa="create-account"]');
  }

  /**
   * Selects the account title ("Mr." or "Mrs.").
   * @async
   * @param {string} title - Title to select (case-insensitive, e.g. "Mr" or "Mrs").
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async selectTitle(title) {
    const titleLocator = title.toLowerCase() === 'mrs' ? this.titleMrs : this.titleMr;
    await titleLocator.check();
  }

  /**
   * Fills in the account information section of the signup form
   * (title, name, password, date of birth, and preference checkboxes).
   * @async
   * @param {Object} user - User data used to fill the form.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async fillAccountInformation(user) {
    await this.selectTitle(user.title);
    await this.nameInput.fill(user.name);
    await this.passwordInput.fill(user.password);
    await this.daySelect.selectOption(user.dateOfBirth.day);
    await this.monthSelect.selectOption({ label: user.dateOfBirth.month });
    await this.yearSelect.selectOption(user.dateOfBirth.year);

    if (user.newsletter) {
      await this.newsletterCheckbox.check();
    }
    if (user.specialOffers) {
      await this.specialOffersCheckbox.check();
    }
  }

  /**
   * Fills in the address information section of the signup form.
   * @async
   * @param {Object} user - User data used to fill the form.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async fillAddressInformation(user) {
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.companyInput.fill(user.company);
    await this.addressInput.fill(user.address);
    await this.address2Input.fill(user.address2);
    await this.countrySelect.selectOption(user.country);
    await this.stateInput.fill(user.state);
    await this.cityInput.fill(user.city);
    await this.zipcodeInput.fill(user.zipcode);
    await this.mobileNumberInput.fill(user.mobileNumber);
  }

  /**
   * Submits the signup form by clicking the "Create Account" button.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async createAccount() {
    await this.createAccountButton.click();
  }

  /**
   * Completes the full registration flow: fills account information,
   * fills address information, and submits the form.
   * @async
   * @param {Object} user - User data used to complete registration.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async completeRegistration(user) {
    await this.fillAccountInformation(user);
    await this.fillAddressInformation(user);
    await this.createAccount();
  }
}
