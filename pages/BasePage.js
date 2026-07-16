/**
 * Base class for all Page Objects.
 * Provides the shared Playwright page instance and common navigation
 * functionality reused across all page-specific classes.
 */
export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page instance.
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigates the browser to the given path relative to the base URL.
   * @async
   * @param {string} [path='/'] - Relative path to navigate to.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async goto(path = '/') {
    await this.page.goto(path);
  }
}
