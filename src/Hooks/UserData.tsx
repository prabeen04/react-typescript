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

export default function useUserData() {
    const [usersState, setUsersState] = React.useState<IUser>(initialState)

    React.useEffect(() => {
        setUsersState({ ...usersState, fetchingUsers: true })
        fetch(url)
            .then((res: any) => res.json())
            .then((data: any) => setUsersState({ ...usersState, fetchingUsers: false, users: data }))
            .catch((err: any) => setUsersState({ ...usersState, fetchingUsers: false, fetchingUsersError: true }))
    }, [])

    return usersState
}
