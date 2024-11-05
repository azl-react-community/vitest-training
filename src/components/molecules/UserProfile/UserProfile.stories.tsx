import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import UserProfileSrc from './UserProfile'
import { UserProfileInterface  } from './UserProfile.interface'
import { UserProfileMock } from './UserProfile.mock'

/// TODO: Adapt Stories
const UserProfileMeta: Meta<typeof UserProfileSrc> = {
    title: 'molecules/UserProfile',
    component: UserProfileSrc,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Add description here / markdown possible',
            }
        }
    },
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof UserProfileSrc>
export const UserProfile: Story = {
    args: { ...UserProfileMock }
}

export default UserProfileMeta