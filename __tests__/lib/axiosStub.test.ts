import {describe, it, expect, vi} from 'vitest';
import axios from 'axios';
import { getData, postData } from '@/lib/apiService';

vi.mock('axios');

describe('fetchData function', () => {
  it('should fetch data from the API', async() => {
    // Setup a stub for axios.get
    const mockResponse = {data: {id: 1, name: 'Item'}};
    axios.get.mockResolvedValueOnce(mockResponse);

    // Call the function
    const data = await getData('/api/item');

    // Assertions
    expect(data).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledWith('/api/item');
  });
});