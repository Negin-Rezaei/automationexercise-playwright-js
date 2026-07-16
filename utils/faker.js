import { faker } from '@faker-js/faker';

export function generateUniqueEmail() {
  const uniqueSuffix = Date.now();
  return `qa.user.${uniqueSuffix}@example.com`;
}

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
