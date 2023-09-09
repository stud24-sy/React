import React, {useEffect, useState} from 'react';
import {Col, Input, Row, Select} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useRecoilState} from 'recoil';
import {contentStore, customerContentStoreAtom} from '../../store';

const ModalCustomerInfoBox = (props) => {
    const [inputValue, setInputValue] = useState({
        clientName: '',
        soldToName: '',
        shipToName: '',
        billToName: '',
        channel: '',
        region: '',
        crn: '',
        address: '',
        representativeName: '',
        representativeNumber: ''
    });
    const { user, setUser } = props;
    const [content, setContent] = useRecoilState(contentStore);
    const [customerContentStore, setCustomerContentStore] = useRecoilState(customerContentStoreAtom);

    function updateClearButtonVisibility(event, fieldName) {
        const value = event.target.value;
        setInputValue(prevInputValues => ({
            ...prevInputValues,
            [fieldName]: value
        }));
        setCustomerContentStore(prevInputValues => ({
            ...prevInputValues,
            [fieldName]: value
        }));
    }

    function handleClearButtonClick(fieldName) {
        setInputValue(prevInputValues => ({
            ...prevInputValues,
            [fieldName]: ''
        }));
        setCustomerContentStore(prevInputValues => ({
            ...prevInputValues,
            [fieldName]: ''
        }));
    }

    useEffect(() => {
        setInputValue(prevInputValues => ({
            ...prevInputValues,
            ['soldToName']: user.category,
            ['billToName']: user.content
        }));
        setCustomerContentStore(prevInputValues => ({
            ...prevInputValues,
            ['clientName']: content.clientName,
            ['shipToName']: content.shipToName
        }));
    }, [user]);

    return (
        <section className="customer-info">
            <span className="text-xl text-gray-700">고객사 정보</span>

            <div className="pt-3">
                {/*Industry / Type*/}
                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Industry / Type
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-4 border-r">
                        <div className="w-full">
                            <Select
                                className="w-1/2 p-1"
                                defaultValue="선택하세요."
                                options={[
                                    {
                                        value: '선택하세요.',
                                        label: '선택하세요.',
                                    }
                                ]}
                            />
                            <Select
                                className="w-1/2 p-1"
                                defaultValue="선택하세요."
                                options={[
                                    {
                                        value: '선택하세요.',
                                        label: '선택하세요.',
                                    }
                                ]}
                            />
                        </div>
                    </Col>
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Division_SP
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full">
                            <Select
                                className="w-full"
                                defaultValue="선택하세요."
                                options={[
                                    {
                                        value: '선택하세요.',
                                        label: '선택하세요.',
                                    }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>

                {/*Client Name*/}
                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Client Name
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="Client Name을 입력하세요."
                                   type="text"
                                   value={inputValue.clientName}
                                   onChange={(e) => updateClearButtonVisibility(e, 'clientName')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.clientName ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('clientName')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Sold To Name
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="Sold To Name을 입력하세요."
                                   type="text"
                                   value={inputValue.soldToName}
                                   onChange={(e) => updateClearButtonVisibility(e, 'soldToName')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.soldToName ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('soldToName')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                </Row>

                {/*Ship to Name*/}
                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Ship To Name
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="Ship To Name을 입력하세요."
                                   type="text"
                                   value={inputValue.shipToName}
                                   onChange={(e) => updateClearButtonVisibility(e, 'shipToName')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.shipToName ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('shipToName')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Bill To Name
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="Bill To Name을 입력하세요."
                                   type="text"
                                   value={inputValue.billToName}
                                   onChange={(e) => updateClearButtonVisibility(e, 'billToName')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.billToName ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('billToName')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                </Row>

                {/*Channel*/}
                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Channel
                        </div>
                    </Col>
                    <Col span={20} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="Channel을 입력하세요."
                                   type="text"
                                   value={inputValue.channel}
                                   onChange={(e) => updateClearButtonVisibility(e, 'channel')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.channel ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('channel')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                </Row>

                {/*Market Type*/}
                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Merket Type
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full">
                            <Select
                                defaultValue="선택하세요."
                                options={[
                                    {
                                        value: '선택하세요.',
                                        label: '선택하세요.',
                                    }
                                ]}
                            />
                        </div>
                    </Col>
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Region
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="KR(대한민국)"
                                   type="text"
                                   value={inputValue.region}
                                   onChange={(e) => updateClearButtonVisibility(e, 'region')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.region ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('region')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                </Row>

                {/*사업자등록번호*/}
                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            사업자등록번호
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="사업자등록번호를 입력하세요."
                                   type="text"
                                   value={inputValue.crn}
                                   onChange={(e) => updateClearButtonVisibility(e, 'crn')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.crn ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('crn')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            주소
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="주소를 입력하세요."
                                   type="text"
                                   value={inputValue.address}
                                   onChange={(e) => updateClearButtonVisibility(e, 'address')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.address ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('address')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                </Row>

                {/*대표자명*/}
                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            대표자명
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="대표자명을 입력하세요."
                                   type="text"
                                   value={inputValue.representativeName}
                                   onChange={(e) => updateClearButtonVisibility(e, 'representativeName')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.representativeName ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('representativeName')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            대표번호
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="대표번호를 입력하세요."
                                   type="text"
                                   value={inputValue.representativeNumber}
                                   onChange={(e) => updateClearButtonVisibility(e, 'representativeNumber')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.representativeNumber ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('representativeNumber')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default ModalCustomerInfoBox;