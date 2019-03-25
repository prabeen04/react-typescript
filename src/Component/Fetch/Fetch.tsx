import * as React from 'react'
import useUserData, { IUserState, IUser, IAddress, ICompany, IGeo } from "../../Hooks/UserData";
import UserList from "./UserList";
import './Fetch.css';

export default function Fetch() {
    const { fetchingUsers, fetchingUsersError, users } = useUserData();
    console.log(users)
    if (fetchingUsers) {
        return <p>fetching users...</p>
    }
    if (fetchingUsersError) {
        return <p>Opps, Error while fetching users...</p>
    }
    return (
        <>
            <div className='user-wrapper flex-container space-between'>
                <div className='user-list'>
                    {users && users.map((user: IUser) => <UserList key={user.id} {...user} />)}
                </div>
                <div className='user-detail'>


                </div>

            </div>
        </>
    )
}
