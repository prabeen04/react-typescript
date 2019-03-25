import * as React from 'react'

const url = 'https://jsonplaceholder.typicode.com/users';

export interface IUserState {
    fetchingUsers: boolean;
    users: any;
    fetchingUsersError: boolean
}
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: any;
    address: any
}
const initialState = {
    fetchingUsers: false,
    users: [],
    fetchingUsersError: false
}

export default function useUserData() {
    const [usersState, setUsersState] = React.useState<IUserState>(initialState)

    React.useEffect(() => {
        setUsersState({ ...usersState, fetchingUsers: true })
        fetch(url)
            .then((res: any) => res.json())
            .then((data: IUser[]) => setUsersState({ ...usersState, fetchingUsers: false, users: data }))
            .catch((err: any) => setUsersState({ ...usersState, fetchingUsers: false, fetchingUsersError: true }))
    }, [])

    return usersState
}
