import {expect, test} from "@playwright/test";

test.describe('test the backend endpoints', () => {
    test('should be ok', async ({ request }) => {
      const health = await request.get('/login.html');
    
      expect(health.ok()).toBeTruthy();
      expect(health.status()).toBe(200);
      console.log(health.status());
      console.log(health);
    });

});