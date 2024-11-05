// tests/UserFetcher.test.js
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, afterEach } from 'vitest';
import UserFetcher from './UserFetcher';

// Mock the fetch function
global.fetch = vi.fn();

describe('UserFetcher Component', () => {
    afterEach(() => {
        vi.clearAllMocks(); // Clear mock calls and instances after each test
    });

    it('renders loading state initially', () => {
        // Arrange: Render the UserFetcher component
        render(<UserFetcher />);

        // Assert: Check that loading text is displayed
        expect(screen.getByText('Loading...')).toBeDefined();
    });

    it('renders user data when fetch is successful', async () => {
        // Arrange: Mock the fetch function to return user data
        const mockUser = { name: 'Alice', email: 'alice@example.com' };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockUser,
        });

        // Act: Render the UserFetcher component
        render(<UserFetcher />);

        // Assert: Wait for the user data to be displayed
        await waitFor(() => {
            expect(screen.getByText('Alice')).toBeDefined();
            expect(screen.getByText('alice@example.com')).toBeDefined();
        });
    });

    it('renders error message when fetch fails', async () => {
        // Arrange: Mock the fetch function to throw an error
        fetch.mockRejectedValueOnce(new Error('Network response was not ok'));

        // Act: Render the UserFetcher component
        render(<UserFetcher />);

        // Assert: Wait for the error message to be displayed
        await waitFor(() => {
            expect(screen.getByText('Error: Network response was not ok')).toBeDefined();
        });
    });
});
