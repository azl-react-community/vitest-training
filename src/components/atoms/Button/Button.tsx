import { ButtonInterface } from './Button.interface'

const Button = ({testID, label, onClick }:ButtonInterface) => {

    return(
        <div data-testid={ testID } onClick={ onClick }
             className={ `Button` }>
            { label}
        </div>
    )

}

export default Button
