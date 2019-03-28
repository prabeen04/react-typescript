import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { IUser, IAddress, IGeo, ICompany } from "../../Hooks/UserData";

export interface IUserDetail {
    user: IUser;
}
export default function UserDetail(props: IUserDetail) {
    const styles = useSpring({ opacity: 1, transform: 'translate3d(0px,0,0) ', from: { opacity: 0, transform: 'translate3d(0,200px,0) ', } })
    const { user } = props;
    return (
        <div className='user-detail'>
            <animated.div style={styles}>
                <div className="user-detail-header">
                    <h1><i className="fas fa-map-marker-alt">&nbsp;&nbsp;</i>{user.name} </h1>
                </div>

                <div className="user-detail-body">
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <a href={user.website} target='_blank'>{user.website}</a>
                </div>
                <div className="user-detail-body">
                    <p>{user.address.suite}</p>
                    <p>{user.address.street}</p>
                    <p>{user.address.city}</p>
                    <p>{user.address.zipcode}</p>
                </div>
            </animated.div>
        </div>
    )
}