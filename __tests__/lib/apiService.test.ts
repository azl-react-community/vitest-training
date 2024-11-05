import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { getData, postData } from '@/lib/apiService';

// Mock axios globally
vi.mock('axios');

describe('API Service', () => {
  it('should fetch data with getData', async () => {
    // Mock axios.get to return a specific value
    axios.get.mockResolvedValue({
      data: { message: 'Hello, world!' },
    });

    // Call getData function
    const data = await getData('/api/example');

    // Assertions
    expect(data).toEqual({ message: 'Hello, world!' });
    expect(axios.get).toHaveBeenCalledWith('/api/example');
  });

  it('should send data with postData', async () => {
    // Mock axios.post to return a specific value
    axios.post.mockResolvedValue({
      data: { success: true },
    });

    // Call postData function
    const data = await postData('/api/example', { name: 'John' });

    // Assertions
    expect(data).toEqual({ success: true });
    expect(axios.post).toHaveBeenCalledWith('/api/example', { name: 'John' });
  });
});
