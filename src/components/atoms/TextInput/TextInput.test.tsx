import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput'
import { TextInputMock } from './TextInput.mock'
import { useState } from 'react'

const testID = 'TextInput-' + Math.floor(Math.random()*90000) + 10000

describe('TextInput', () => {

    // it('Can render TextInput', () => {
    //     render(<TextInput testID={ testID } { ...TextInputMock } />)
    //     let input = screen.getByTestId(testID)
    //     expect(input).not.toBeNull()
    // })

    it('updates displayed value as the user types', async () => {
            const WrapperComponent = () => {
                const [value, setValue] = useState('');
                return <TextInput testID={ testID } value={value} onChange={(e) => setValue(e.target.value)} />;
            }
            render(<WrapperComponent />);

            // Act: Simulate typing into the input

            const input = screen.getByTestId(testID)
            await userEvent.type(input, 'hello');

            // Assert: Check that the displayed value in the input matches "Hello"
            // @ts-ignore
            expect(input.value).toBe('hello'); // Directly check the value property
        });

})