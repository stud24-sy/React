import React, {useEffect, useState} from 'react';
import {Modal, Divider} from "antd";
import ModalTitleBox from './ModalTitleBox';
import ModalCustomerInfoBox from './ModalCustomerInfoBox';
import ModalBusinessInfoBox from './ModalBusinessInfoBox';
import ModalFooterBox from './ModalFooterBox';
import axios from "axios";

const ModalBox = ({ modalVisible, selectedRowData, closeModal }) => {
    const [user, setUser] = useState({
        userId: '',
        category: '',
        content: ''
    });

    function testFunction() {
        axios.get(`/api/host`)
            .then((response) => {
                alert("사용자 정보를 불러왔습니다. : " + response.data);
                setUser(response.data);
            })
            .catch((error) => {
                alert("사용자 정보 불러오기 실패 : " + JSON.stringify(error.response.data));
                console.log(error);
            });
    }

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
                    <ModalCustomerInfoBox
                        user={user}
                        setUser={setUser}
                    />
                    <ModalBusinessInfoBox/>
                    <ModalFooterBox
                        user={user}
                        setUser={setUser}
                        closeModal={closeModal}
                    />
                </div>
            )}
        </Modal>
    );
};

export default ModalBox;
