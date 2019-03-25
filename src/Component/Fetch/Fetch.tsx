import * as React from 'react'
import useUserData, { IUserState, IUser, IAddress, ICompany, IGeo } from "../../Hooks/UserData";
import UserList from "./UserList";
import './Fetch.css';

export default function Fetch() {
    const { fetchingUsers, fetchingUsersError, users } = useUserData();
    const [activeUser, setActiveUser] = React.useState({})
    React.useEffect(() => {
        if(users.length){
            setActiveUser(users[0])
        }
    })
    return (
        <>
            <div className='user-wrapper flex-container space-between'>
                {
                    fetchingUsers
                        ? <p className="fetching">fetching users...</p>
                        : fetchingUsersError
                            ? <p>Opps, Error while fetching users...</p>
                            : <>
                                <div className='user-list'>
                                    {users && users.map((user: IUser) => <UserList activeUser={activeUser} key={user.id} {...user} />)}
                                </div>
                                <div className='user-detail'>
                                </div>
                            </>
                }


            </div>
        </>
    )
}
