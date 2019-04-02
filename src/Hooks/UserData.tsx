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
    company: ICompany;
    address: IAddress
}
export interface ICompany {
    bs: string;
    catchPhrase: string;
    name: string;
}
export interface IAddress {
    city: string;
    street: string;
    geo: IGeo;
    suite: string;
    zipcode: string;
}
export interface IGeo {
    lat: string;
    lng: string;
}
const initialState = {
    fetchingUsers: false,
    users: [],
    fetchingUsersError: false
}

export default function useUserData() {
    const [usersState, setUsersState] = React.useState<IUserState>(initialState)
    const controller = new AbortController();
    const signal = controller.signal;
    React.useEffect(() => {
        setUsersState({ ...usersState, fetchingUsers: true })
        fetch(url, {
            method: 'GET',
            signal
        })
            .then((res: any) => res.json())
            .then((data: IUser[]) => setUsersState({ ...usersState, fetchingUsers: false, users: data }))
            .catch((err: any) => setUsersState({ ...usersState, fetchingUsers: false, fetchingUsersError: true }))
        return () => controller.abort();
    }, [])

    return usersState
}
