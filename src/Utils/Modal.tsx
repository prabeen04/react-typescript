import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export interface IUserAddressModal {
    title?: string;
    visible: boolean;
    toggle: () => void;
    children: JSX.Element;
    noHeader?: boolean;
    size?: string;
}
export default function Modal_(props: IUserAddressModal) {
    const { children, toggle, visible, title, noHeader, size } = props
    return (
        <div>
            <Modal isOpen={visible} toggle={toggle} size={size || 'sm'}>
                <ModalHeader toggle={toggle} hidden={noHeader}>{title}</ModalHeader>
                <ModalBody>{children}</ModalBody>
            </Modal>
        </div>
    );
}
