import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UserProfileInterface  } from './UserProfile.interface'
import UserProfile from './UserProfile'
import { UserProfileMock } from './UserProfile.mock'

/// TODO: fix test based upon interface
const testID = 'UserProfile-' + Math.floor(Math.random()*90000) + 10000

describe('UserProfile', () => {

    it('Can render UserProfile', () => {
        render(<UserProfile testID={ testID } { ...UserProfileMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

    it('renders the name', () => {
        render(<UserProfile testID={ 'name' } name={'Pete'} email={'pete@zahut.com'}/>)
        let name = screen.getByText('Pete')
        expect(name).toBeDefined()
    })

    it('renders the email', () => {
        render(<UserProfile testID={ 'mail' } name={'Tony'} email={'choco@lony.com'}/>)
        let name = screen.getByText('choco@lony.com')
        expect(name).toBeDefined()
    })

})