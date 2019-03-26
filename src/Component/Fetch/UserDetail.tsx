import * as React from 'react';
import { IUser, IAddress, IGeo, ICompany } from "../../Hooks/UserData";

export interface IUserDetail {
    user: IUser;
}
export default function UserDetail(props: IUserDetail) {
    const { user } = props;
    return (
        <div className='user-detail'>
            <div className="user-detail-header">
                <h1>{user.name}</h1>
            </div>

        </div>
    )
}