import { getHomeData } from '../api/api';

describe('API Tests', () => {
  test('should fetch home data', async () => {
    const id = '94a2e536-aa6d-46fc-a6a3-363e03f564f2';
    const data = await getHomeData(id);

    // Add your assertions based on the expected data from the API
    expect(data.id).toBe(id);
    expect(data.name).toBeDefined();
    // Add more assertions based on your API response structure
  });

  test('should fetch home data 2', async () => {
    const id = 'efe87002-8bc2-4306-9db6-205b487abb2';
    const data = await getHomeData(id);

    // Add your assertions based on the expected data from the API
    expect(data.id).toBe(id);
    expect(data.name).toBeDefined();
    // Add more assertions based on your API response structure
  });

  test('should handle errors gracefully', async () => {
    const invalidDataId = -1;

    // Ensure that the API function throws an error for invalid input
    await expect(getHomeData(invalidDataId)).rejects.toThrow();
  });
});