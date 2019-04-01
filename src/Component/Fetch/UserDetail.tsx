import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { IUser, IAddress, IGeo, ICompany } from "../../Hooks/UserData";
import UserAddressModal from "../../Utils/UserAddressModal";
export interface IUserDetail {
    user: IUser;
}
export default function UserDetail(props: IUserDetail) {
    const { user } = props;
    const styles = useSpring({ opacity: 1, transform: 'translate3d(0px,0,0) ', from: { opacity: 0, transform: 'translate3d(0,200px,0) ', } });
    const [mapModal, setMapModal] = React.useState<boolean>(false)
    function toggleModal() {
        setMapModal(!mapModal)
    }
    return (
        <>
            <div className='user-detail'>
                <animated.div style={styles}>
                    <div className="user-detail-header">
                        <h1>
                            <i
                                className="fas fa-map-marker-alt clickable-icon"
                                onClick={toggleModal}
                            > &nbsp;&nbsp;</i>
                            {user.name} </h1>
                    </div>

                    <div className="user-detail-body">
                        <div className="detail-list-row">
                            <label>Email</label>
                            <p>{user.email}</p>
                        </div>
                        <div className="detail-list-row">
                            <label>Email</label>
                            <p>{user.phone}</p>
                        </div>
                        <div className="detail-list-row">
                            <label>Email</label>
                            <a href={user.website} target='_blank'>{user.website}</a>
                        </div>
                    </div>
                    <div className="user-detail-body">
                        <p>{user.address.suite}</p>
                        <p>{user.address.street}</p>
                        <p>{user.address.city}</p>
                        <p>{user.address.zipcode}</p>
                    </div>
                </animated.div>
            </div>
            <UserAddressModal
                noHeader
                visible={mapModal}
                toggle={toggleModal}
            >
                <p>{user.name}</p>
            </UserAddressModal>
        </>
    )
}