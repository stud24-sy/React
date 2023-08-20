import React, {useState} from 'react';
import {Col, Input, Row, Select, Space} from "antd";

const ModalBusinessInfoBox = () => {
    const [size, setSize] = useState(0);

    return (
        <section className="customer-info mt-6">
            <span className="text-xl text-gray-700">영업 정보</span>

            <div className="pt-3">
                {/*Project Name*/}
                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Project Name
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
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Product
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
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
                </Row>

                {/*Deal Type*/}
                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Deal Type
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
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            Service Type
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
            </div>
        </section>
    );
}

export default ModalBusinessInfoBox;
