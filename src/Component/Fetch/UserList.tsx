import * as React from 'react';
import { IUser } from "../../Hooks/UserData";
interface IUserList {
    user: IUser;
    activeUser: IUser;
    setUser: (user: IUser) => void
}
export default function UserList(props: IUserList) {
    const { activeUser, setUser, user } = props
    console.log(props)
    return (
        <div
            className={`user-list-item ${user.id === activeUser.id ? 'active-list' : ''}`}
            onClick={() => setUser(user)}
        >
            {user.name}
        </div>
    )
}
