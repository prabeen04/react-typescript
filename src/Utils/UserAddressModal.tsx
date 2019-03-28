import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export interface IUserAddressModal {
    title?: string;
    visible: boolean;
    toggle: () => void;
    children: JSX.Element;
    noHeader?: boolean;
}
export default function UserAddressModal(props: IUserAddressModal) {
    const { children, toggle, visible, title, noHeader } = props
    return (
        <div>
            <Modal isOpen={visible} toggle={toggle} >
                <ModalHeader toggle={toggle} hidden={noHeader}>{title}</ModalHeader>
                <ModalBody>{children}</ModalBody>
            </Modal>
        </div>
    );
}
