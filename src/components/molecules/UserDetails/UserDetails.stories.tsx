import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import UserDetailsSrc from './UserDetails'
import { UserDetailsInterface  } from './UserDetails.interface'
import { UserDetailsMock } from './UserDetails.mock'

/// TODO: Adapt Stories
const UserDetailsMeta: Meta<typeof UserDetailsSrc> = {
    title: 'molecules/UserDetails',
    component: UserDetailsSrc,
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

type Story = StoryObj<typeof UserDetailsSrc>
export const UserDetails: Story = {
    args: { ...UserDetailsMock }
}

export default UserDetailsMeta