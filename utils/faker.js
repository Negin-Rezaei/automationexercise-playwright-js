import { faker } from '@faker-js/faker';

/**
 * Generates a unique email address for test data isolation.
 *
 * @returns {string} A unique email address.
 */
export function generateUniqueEmail() {
  const uniqueSuffix = Date.now();
  return `qa.user.${uniqueSuffix}@example.com`;
}

/**
 * Generates a random user with account and address details for registration tests.
 *
 * @returns {{
 *   name: string,
 *   email: string,
 *   password: string,
 *   dateOfBirth: {day: string, month: string, year: string},
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
 * }} Randomly generated user data.
 */
export function generateRandomUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    name: `${firstName} ${lastName}`,
    email: generateUniqueEmail(),
    password: faker.internet.password({ length: 12 }),
    dateOfBirth: {
      day: String(faker.number.int({ min: 1, max: 28 })),
      month: faker.date.month(),
      year: String(faker.number.int({ min: 1970, max: 2005 })),
    },
    firstName,
    lastName,
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: 'United States',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: faker.string.numeric(10),
  };
}
