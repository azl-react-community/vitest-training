import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import CounterSrc from './Counter'
import { CounterInterface  } from './Counter.interface'
import { CounterMock } from './Counter.mock'

/// TODO: Adapt Stories
const CounterMeta: Meta<typeof CounterSrc> = {
    title: 'molecules/Counter',
    component: CounterSrc,
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

type Story = StoryObj<typeof CounterSrc>
export const Counter: Story = {
    args: { ...CounterMock }
}

export default CounterMeta