import * as React from 'react'
import useUserData, { IUser } from "../../Hooks/UserData";
export default function Fetch() {
    const { fetchingUsers, fetchingUsersError, users: IUser } = useUserData();
    return (
        <>

        </>
    )
}
