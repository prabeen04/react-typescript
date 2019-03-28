import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import useUserData, { IUserState, IUser, IAddress, ICompany, IGeo } from "../../Hooks/UserData";
import UserList from "./UserList";
import UserDetail from './UserDetail';
import './Fetch.css';

export default function Fetch() {
    const { fetchingUsers, fetchingUsersError, users } = useUserData();
    const [activeUser, setActiveUser] = React.useState<IUser>(users.length && users[0] || {})
    const styles = useSpring({ opacity: 1, transform: 'translate3d(0px,0,0) ', from: { opacity: 0, transform: 'translate3d(0,200px,0) ', } })
    React.useEffect(() => {
        if (users.length) {
            setActiveUser(users[0])
        }
    }, [users])
    function setUser(user: IUser) {
        console.log(user)
        setActiveUser(user)
    }
    return (
        <>
            <div className='user-wrapper flex-container space-between'>
                {
                    fetchingUsers
                        ? <div className="flex-container center-align-row" style={{ width: '100%', padding: 100 }}>
                            <div className="loading"></div>
                        </div>
                        : fetchingUsersError
                            ? <p>Opps, Error while fetching users...</p>
                            : <>
                                <div className='user-list'>
                                    {users && users.map((user: IUser) => <UserList setUser={setUser} activeUser={activeUser} key={user.id} user={user} />)}
                                </div>
                                {activeUser.hasOwnProperty('name')
                                    &&
                                    <animated.div style={styles}>
                                        <UserDetail user={activeUser} />
                                    </animated.div>
                                }
                            </>
                }
            </div>
        </>
    )
}
