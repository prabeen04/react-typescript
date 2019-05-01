import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { IAddStoryModal } from "../StoryInterface";

export default function AddStoryModal(props: IAddStoryModal) {
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
