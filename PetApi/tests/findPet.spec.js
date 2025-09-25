// PetApi/tests/findPet.spec.js
const { test, expect } = require('@playwright/test');
const { PetAPI } = require('../endpoints/petApi');

test.describe('Petstore API - Find Pet (by status)', () => {
  const statuses = ['available', 'pending', 'sold'];

  for (const status of statuses) {
    test(`Find pets with status "${status}"`, async ({ request }) => {
      // Create a new PetAPI instance using the test-scoped request
      const api = new PetAPI(request);

      const res = await api.findPetsByStatus(status);
      expect(res.status()).toBe(200);

      const pets = await res.json();
      if (pets.length > 0) {
        pets.forEach(p => console.log(`Pet with status "${status}" found: ${p.name}`));
      } else {
        console.warn(`No pets with status "${status}" were found.`);
      }

      expect(pets.length).toBeGreaterThan(0);
    });
  }
});
