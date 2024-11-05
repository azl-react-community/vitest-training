import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UserDetailsInterface  } from './UserDetails.interface'
import UserDetails from './UserDetails'
import { UserDetailsMock } from './UserDetails.mock'

/// TODO: fix test based upon interface
const testID = 'UserDetails-' + Math.floor(Math.random()*90000) + 10000

describe('UserDetails', () => {

    it('Can render UserDetails', () => {
        render(<UserDetails testID={ testID } { ...UserDetailsMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})