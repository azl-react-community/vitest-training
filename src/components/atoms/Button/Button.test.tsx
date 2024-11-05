import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'
import { ButtonMock } from './Button.mock'

const testID = 'Button-' + Math.floor(Math.random()*90000) + 10000

describe('Button', () => {

    it('Can render Button based on testID', () => {
        render(<Button testID={ testID } { ...ButtonMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

    it('Can render Button based on label', () => {
        render(<Button label={'Find this one!'} />)
        let buttonCreated = screen.getByText('Find this one!')
        expect(buttonCreated).toBeDefined()
    })

    it('calls onClick handler when clicked', () => {
        // Arrange: Create a mock function for onClick
        const onClickMock = vi.fn();

        // Act: Render the button with the mock function and simulate a click
        render(<Button label="Click test"
                       onClick={onClickMock}/>);
        const button = screen.getByText('Click test');
        fireEvent.click(button);

        // Assert: Check that the onClick function was called once
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });



})