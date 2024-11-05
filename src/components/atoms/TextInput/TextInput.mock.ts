import { TextInputInterface } from './TextInput.interface'

export const TextInputMock: TextInputInterface = {
  value: '',
  onChange: (e) => { console.log(e.target.value) }
}

