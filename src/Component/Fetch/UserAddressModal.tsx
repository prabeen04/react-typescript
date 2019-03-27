import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export interface IUserAddressModal {
    visible: boolean;
    toggle: () => void;
    children: JSX.Element
}
function UserAddressModal(props: IUserAddressModal) {
    function toggle() { }
    return (
        <div>
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>{props.children}</ModalBody>
            </Modal>
        </div>
    );
}

export default UserAddressModal;