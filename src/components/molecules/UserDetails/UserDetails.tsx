// import { useState, useEffect, useContext } from 'react'
import { UserDetailsInterface } from './UserDetails.interface'

const UserDetails = ({testID, email }:UserDetailsInterface) => {

    return(
        <div data-testid={ testID }
             className={ `UserDetails` }>
            <h2>{ email }</h2>
        </div>
    )

}

export default UserDetails
