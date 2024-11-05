import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CounterInterface  } from './Counter.interface'
import Counter from './Counter'
import { CounterMock } from './Counter.mock'
import userEvent from '@testing-library/user-event';


/// TODO: fix test based upon interface
const testID = 'Counter-' + Math.floor(Math.random()*90000) + 10000

describe('Counter', () => {

    // it('Can render Counter', () => {
    //     render(<Counter testID={ testID } { ...CounterMock } />)
    //     let defaultCreated = screen.getByTestId(testID)
    //     expect(defaultCreated).not.toBeNull()
    // })

    it('should initialize with a count of 0', () => {
        // Arrange: Render the Counter component
        render(<Counter />);

        // Assert: Check that the initial count is displayed correctly
        expect(screen.getByText('Count: 0')).toBeDefined();
    });


    it('should increment the count when the increment button is clicked', async () => {
        // Arrange: Render the Counter component
        render(<Counter />);

        // Act: Simulate clicking the increment button
        const buttons = screen.getAllByRole('button'); // Get all buttons
        await userEvent.click(buttons[0]);
        // Assert: Check that the count is incremented
        expect(screen.getByText('Count: 0')).toBeDefined();
    });

    it('should decrement the count when the decrement button is clicked', async () => {
        // Arrange: Render the Counter component
        render(<Counter />);

        // Act: Simulate clicking the increment button twice
        const buttons = screen.getAllByRole('button'); // Get all buttons
        await userEvent.click(buttons[0]); // Increment
        await userEvent.click(buttons[0]); // Increment again (Count becomes 2)

        // Act: Simulate clicking the decrement button
        await userEvent.click(buttons[1]); // Click the second button (Decrement)


        // Assert: Check that the count is decremented
        expect(screen.getByText('Count: 2')).toBeDefined();
    });

})