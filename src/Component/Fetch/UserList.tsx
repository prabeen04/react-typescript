import * as React from 'react';
import { IUser } from "../../Hooks/UserData";

export default function UserList(props: IUser) {
    return (
        <div className='user-list-item'>
            {props.name}
        </div>
    )
}
