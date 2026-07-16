import { generateRandomUser } from '../utils/faker.js';
import { TITLES } from '../utils/constants.js';

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
