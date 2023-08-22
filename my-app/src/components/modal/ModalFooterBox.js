import React from 'react';
import {Button} from "antd";

const ModalBusinessInfoBox = ({closeModal}) => {

    return (
        <section className="footer flex justify-end mt-6">
            <Button type="default" shape="round" className="mr-3" onClick={closeModal}>
                닫기
            </Button>
            <Button className="text-white bg-blue-500" type="primary" shape="round" onClick={closeModal}>
                저장
            </Button>
        </section>
    );
}

export default ModalBusinessInfoBox;
