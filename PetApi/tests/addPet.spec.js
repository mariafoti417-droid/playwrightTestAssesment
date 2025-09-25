const { test, expect } = require('@playwright/test');
const { APIHelpers } = require('../utils/apiHelpers');

test.describe('Petstore API - Add Pet (using helpers)', () => {
  test('Create a new pet - available', async ({ request }) => {
    const helpers = new APIHelpers(request);

    const createdPet = await helpers.createPet('TestDog', 'available');
    console.log('Created Pet ID:', createdPet.id);

    expect(createdPet.name).toBe('TestDog');
    expect(createdPet.status).toBe('available');

  });

  test('Create a new pet - pending', async ({ request }) => {
    const helpers = new APIHelpers(request);

    const createdPet = await helpers.createPet('TestDogPending', 'pending');
    console.log('Created Pet ID:', createdPet.id);

    expect(createdPet.name).toBe('TestDogPending');
    expect(createdPet.status).toBe('pending');

  });

  test('Create a new pet - sold', async ({ request }) => {
    const helpers = new APIHelpers(request);

    const createdPet = await helpers.createPet('TestDogPSold', 'sold');
    console.log('Created Pet ID:', createdPet.id);

    expect(createdPet.name).toBe('TestDogPending');
    expect(createdPet.status).toBe('pending');

  });
});
