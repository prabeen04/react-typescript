import * as React from 'react'

const url = 'https://jsonplaceholder.typicode.com/users';

export interface IUser {
    fetchingUsers: boolean;
    users: any;
    fetchingUsersError: boolean
}
const initialState = {
    fetchingUsers: false,
    users: [],
    fetchingUsersError: false
}

export default function UserData() {
    const [usersState, setUsersState] = React.useState<IUser>(initialState)

    return null
}
