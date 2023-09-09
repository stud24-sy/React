import React, {useState} from 'react';
import {Button, Table} from "antd";
import ModalBox from './modal/ModalBox';
import {contentStore, customerContentStoreAtom} from '../store';
import {useRecoilState} from "recoil";


const ResultBox = ({ clientName, shipToName, onClientNameChange, onShipToNameChange }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [content, setContent] = useRecoilState(contentStore);
    const [customerContentStore, setCustomerContentStore] = useRecoilState(customerContentStoreAtom);


    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
        },
        {
            title: '설치계획일(ESL)',
            dataIndex: 'ESL',
        },
        {
            title: '설치계획일(네트워크)',
            dataIndex: 'network',
        },
        {
            title: '계약명',
            dataIndex: 'contractName',
        },
        {
            title: 'Shop명',
            dataIndex: 'ShopName',
        },
        {
            title: '주문번호',
            dataIndex: 'OrderNumber',
        },
        {
            title: '담당PM',
            dataIndex: 'PM',
        },
        {
            title: '진행상태',
            dataIndex: 'Progress',
        }
    ];

    const data = [
        {
            no: 69,
            ESL: '2023.08.02',
            network: '2023.07.30',
            contractName: 'SAP - EMS Test (08-02)',
            ShopName: '백석문화대학교 산학협력단...',
            OrderNumber: 295,
            PM: '',
            Progress: '계획 미수립'
        },
        {
            no: 68,
            ESL: '2023.08.02',
            network: '2023.07.30',
            contractName: 'SAP - EMS Test (08-03)',
            ShopName: '베스트샵평화점 본사',
            OrderNumber: 298,
            PM: '',
            Progress: '계획 미수립',
        },
        {
            no: 67,
            ESL: '2023.08.02',
            network: '2023.07.30',
            contractName: 'SAP - EMS Test (08-04)',
            ShopName: '청호대리점 본사',
            OrderNumber: 299,
            PM: '',
            Progress: '계획 미수립',
        },
        {
            no: 66,
            ESL: '2023.08.02',
            network: '2023.07.30',
            contractName: 'SAP - EMS Test (08-05)',
            ShopName: '납품처',
            OrderNumber: 300,
            PM: '',
            Progress: '계획 미수립',
        }
    ];

    const closeModal = () => {
        setSelectedRowData(null);
        setModalVisible(false);


        if (content.clientName !== '저장소 값') {
            setCustomerContentStore({
                clientName: content.clientName, // ModalCustomerInfoBox 컴포넌트에서 가져온 clientName 값
                shipToName: content.shipToName // ModalCustomerInfoBox 컴포넌트에서 가져온 shipToName 값
            });
        }
    };

    function handleRowClick(record) {
        setSelectedRowData(record);
        setModalVisible(true);
        return undefined;
    }

    return (
        <>
            <div className="flex w-full items-center pt-2 pb-2">
                <div className="w-1/2">
                    <Button className="w-1/5 border-2 hover:shadow-md pl-6" type="default" shape="round">
                        엑셀 다운로드
                    </Button>
                </div>
                <div className="w-1/2 flex justify-end">
                    총 69건
                </div>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                size="middle"
                rowKey="no"
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => handleRowClick(record)
                    };
                }}/>

            <ModalBox
                modalVisible={modalVisible}
                selectedRowData={selectedRowData}
                closeModal={closeModal}
            />
        </>
    );
};

export default ResultBox;
