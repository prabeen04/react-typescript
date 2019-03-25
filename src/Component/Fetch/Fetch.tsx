import * as React from 'react'
import useUserData, { IUserState, IUser } from "../../Hooks/UserData";

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
            {/* {users && users.map((user: any) => <p>{user.name}</p>)} */}
        </>
    )
}
