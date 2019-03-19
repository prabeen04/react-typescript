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

    React.useEffect(() => {
        fetch(url)
            .then((res: any) => res.json())
            .then((data: any) => setUsersState(data))
    },[])

    return usersState
}
