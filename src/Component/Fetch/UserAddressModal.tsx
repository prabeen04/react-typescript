import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function UserAddressModal(props: any) {
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