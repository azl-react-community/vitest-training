import { UserProfileInterface } from './UserProfile.interface'
import {UserDetails} from "@/components/molecules";

const UserProfile = ({testID, name, email }:UserProfileInterface) => {

    return(
        <div data-testid={ testID }
             className={ `UserProfile` }>
            <h1>{ name }</h1>
            <UserDetails email={email}/>
        </div>
    )

}

export default UserProfile
