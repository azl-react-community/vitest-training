import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import UserFetcherSrc from './UserFetcher'
import { UserFetcherInterface  } from './UserFetcher.interface'
import { UserFetcherMock } from './UserFetcher.mock'

/// TODO: Adapt Stories
const UserFetcherMeta: Meta<typeof UserFetcherSrc> = {
    title: 'organisms/UserFetcher',
    component: UserFetcherSrc,
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

type Story = StoryObj<typeof UserFetcherSrc>
export const UserFetcher: Story = {
    args: { ...UserFetcherMock }
}

export default UserFetcherMeta