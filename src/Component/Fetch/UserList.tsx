import * as React from 'react';
import { IUser } from "../../Hooks/UserData";

export default function UserList(props: any) {
    const { activeUser, ...user } = props
    console.log(props)
    return (
        <div className={`user-list-item ${user.id === activeUser.id ? 'active-list' : ''}`}>
            {props.name}
        </div>
    )
}
