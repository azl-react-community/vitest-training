import React from 'react'
export interface TextInputInterface {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    testID?: string,
}
