import React, { useState } from 'react';
import {Modal, Divider} from "antd";
import ModalTitleBox from './ModalTitleBox';
import ModalCustomerInfoBox from './ModalCustomerInfoBox';
import ModalBusinessInfoBox from './ModalBusinessInfoBox';
import ModalFooterBox from './ModalFooterBox';

const ModalBox = ({ modalVisible, selectedRowData, closeModal }) => {
    return (
        <Modal
            visible={modalVisible}
            onCancel={closeModal}
            className="w-full"
            footer={null}
            width={1000}
        >
            {selectedRowData && (
                <div>
                    <ModalTitleBox />
                    <ModalCustomerInfoBox />
                    <ModalBusinessInfoBox />
                    <ModalFooterBox
                        closeModal={closeModal}
                    />
                </div>
            )}
        </Modal>
    );
};

export default ModalBox;
