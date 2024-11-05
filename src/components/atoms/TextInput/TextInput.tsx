import { TextInputInterface } from './TextInput.interface'

const TextInput = ({testID, value, onChange }:TextInputInterface) => {

    return(
        <input type={'text'}
               value={ value }
               placeholder={'Enter text here'}
               onChange={ onChange }
               data-testid={ testID }
               className={ `TextInput` }>
        </input>
    )

}

export default TextInput
