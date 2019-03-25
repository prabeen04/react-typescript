import * as React from 'react';
import { IUser } from "../../Hooks/UserData";

export default function UserList(props: any) {
    const { activeUser, setUser, ...user } = props
    console.log(props)
    return (
        <div
            className={`user-list-item ${user.id === activeUser.id ? 'active-list' : ''}`}
            onClick={() => setUser(user)}
        >
            {props.name}
        </div>
    )
}
