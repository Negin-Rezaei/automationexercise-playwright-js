import { generateRandomUser } from '../utils/faker.js';
import { TITLES } from '../utils/constants.js';

/**
 * Creates a random new user for registration tests, with sensible defaults
 * that can be selectively overridden.
 *
 * @param {Object} [overrides={}] - Fields to override on the generated user.
 * @returns {{
 *   title: string,
 *   name: string,
 *   email: string,
 *   password: string,
 *   dateOfBirth: {day: string, month: string, year: string},
 *   newsletter: boolean,
 *   specialOffers: boolean,
 *   firstName: string,
 *   lastName: string,
 *   company: string,
 *   address: string,
 *   address2: string,
 *   country: string,
 *   state: string,
 *   city: string,
 *   zipcode: string,
 *   mobileNumber: string
 * }} Newly generated user data.
 */
export function createNewUser(overrides = {}) {
  const randomUser = generateRandomUser();

  return {
    title: TITLES.MR,
    name: randomUser.name,
    email: randomUser.email,
    password: randomUser.password,
    dateOfBirth: randomUser.dateOfBirth,
    newsletter: true,
    specialOffers: true,
    firstName: randomUser.firstName,
    lastName: randomUser.lastName,
    company: randomUser.company,
    address: randomUser.address,
    address2: randomUser.address2,
    country: randomUser.country,
    state: randomUser.state,
    city: randomUser.city,
    zipcode: randomUser.zipcode,
    mobileNumber: randomUser.mobileNumber,
    ...overrides,
  };
}
