import * as React from 'react'
import useUserData from "../../Hooks/UserData";

export default function Fetch() {
    const { fetchingUsers, fetchingUsersError, users } = useUserData();
    if (fetchingUsers) {
        return <p>fetching users...</p>
    }
    if (fetchingUsersError) {
        return <p>Opps, Error while fetching users...</p>
    }
    return (
        <>
            {users && users.map(user => <p>{user.name}</p>)}
        </>
    )
}
