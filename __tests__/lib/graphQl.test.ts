import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { fetchGraphQL } from '@/lib/apiService';

//vi.mock('axios');

describe('fetchGraphQL', () => {
  it('should send a GraphQL query and return data', async () => {
    const mockQuery = `
      query GetUser($id: ID!) {
        user(id: $id) {
          id
          name
        }
      }
    `;

    const mockVariables = { id: '123' };

    // Mock response for axios.post
    axios.post.mockResolvedValue({
      data: {
        data: {
          user: {
            id: '123',
            name: 'John Doe',
          },
        },
      },
    });

    // Call fetchGraphQL
    const result = await fetchGraphQL(mockQuery, mockVariables);

    // Assertions
    expect(result).toEqual({
      data: {
        user: {
          id: '123',
          name: 'John Doe',
        },
      },
    });

    expect(axios.post).toHaveBeenCalledWith('/graphql', {
      query: mockQuery,
      variables: mockVariables,
    });
  });

  it('should handle errors in the GraphQL response', async () => {
    const mockQuery = `
      query GetUser($id: ID!) {
        user(id: $id) {
          id
          name
        }
      }
    `;

    const mockVariables = { id: '123' };

    // Mock response with an error
    axios.post.mockResolvedValue({
      data: {
        errors: [
          {
            message: 'User not found',
          },
        ],
      },
    });

    // Call fetchGraphQL and capture the result
    const result = await fetchGraphQL(mockQuery, mockVariables);

    // Assertions
    expect(result).toEqual({
      errors: [
        {
          message: 'User not found',
        },
      ],
    });

    expect(axios.post).toHaveBeenCalledWith('/graphql', {
      query: mockQuery,
      variables: mockVariables,
    });
  });
});
