import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export interface IUserAddressModal {
    title: string;
    visible: boolean;
    toggle: () => void;
    children: JSX.Element
}
export default function UserAddressModal(props: IUserAddressModal) {
    const { children, toggle, visible, title } = props
    return (
        <div>
            <Modal isOpen={visible} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>{children}</ModalBody>
            </Modal>
        </div>
    );
}
