/**
 * User-facing text displayed by the application, used to assert page state
 * and locate elements without relying on hardcoded strings across tests.
 */
export const MESSAGES = {
  NEW_USER_SIGNUP: 'New User Signup!',
  ENTER_ACCOUNT_INFORMATION: 'Enter Account Information',
  ACCOUNT_CREATED: 'Account Created!',
  ACCOUNT_DELETED: 'Account Deleted!',
};

/**
 * Account title options available on the signup form.
 */
export const TITLES = {
  MR: 'Mr',
  MRS: 'Mrs',
};

/**
 * Timeout values (in milliseconds) used across the test suite.
 */
export const TIMEOUTS = {
  DEFAULT: 10_000,
  NAVIGATION: 30_000,
};
