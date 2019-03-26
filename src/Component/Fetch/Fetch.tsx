import * as React from 'react'
import useUserData, { IUserState, IUser, IAddress, ICompany, IGeo } from "../../Hooks/UserData";
import UserList from "./UserList";
import UserDetail from './UserDetail';
import './Fetch.css';

export default function Fetch() {
    const { fetchingUsers, fetchingUsersError, users } = useUserData();
    const [activeUser, setActiveUser] = React.useState<IUser>(users.length && users[0] || {})
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
                        ? <div className="loading"></div>
                        : fetchingUsersError
                            ? <p>Opps, Error while fetching users...</p>
                            : <>
                                <div className='user-list'>
                                    {users && users.map((user: IUser) => <UserList setUser={setUser} activeUser={activeUser} key={user.id} user={user} />)}
                                </div>
                                {activeUser.hasOwnProperty('name')
                                    && <UserDetail user={activeUser} />}
                            </>
                }
            </div>
        </>
    )
}
