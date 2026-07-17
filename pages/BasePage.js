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
    // The site loads slow/heavy third-party ad and tracker scripts that can
    // stall or never fire the "load" event; "domcontentloaded" resolves once
    // the page's own DOM is ready, which is all callers actually depend on
    // (subsequent element assertions already auto-wait for content).
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }
}
