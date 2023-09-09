import React, {useState} from 'react';
import {Button, Col, Input, Row, Select, Space, Progress} from "antd";
import { useRecoilValue, useRecoilState } from 'recoil';
import { contentStore } from '../store';

const ProgressBox = () => {
    const [content, setContent] = useRecoilState(contentStore);

    return (
        <>
            <Row className="justify-between py-4">
                <Col span={14} className="w-full h-full">
                    <Row className="border">
                        <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                            전체
                            <Button className="w-1 text-white bg-blue-400 ml-2 hover:shadow-md" type="primary" shape="circle" size="small">
                                i
                            </Button>
                        </Col>
                        <Col span={10}>
                            <Row className="border">
                                <Col className="flex w-full h-full items-center justify-center font-bold text-sm bg-gray-100 py-4">설치 미완료</Col>
                            </Row>
                            <Row className="border">
                                <Col className="flex w-1/2 h-full items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                                    계획 미수립
                                    <Button className="w-1 text-white bg-blue-400 ml-2 hover:shadow-md" type="primary" shape="circle" size="small">
                                        i
                                    </Button>
                                </Col>
                                <Col className="flex w-1/2 h-full items-center justify-center font-bold text-sm bg-gray-100 py-4">
                                    계획 수립
                                    <Button className="w-1 text-white bg-blue-400 ml-2 hover:shadow-md" type="primary" shape="circle" size="small">
                                        i
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={10}>
                            <Row className="border">
                                <Col className="flex w-full items-center justify-center font-bold text-sm bg-gray-100 py-4">설치 완료</Col>
                            </Row>
                            <Row className="border">
                                <Col className="flex w-1/2 items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                                    <Button className="text-white bg-blue-500 rounded-s font-bold text-m mr-3" type="default">
                                        Client Name
                                    </Button>
                                </Col>
                                <Col className="flex w-1/2 items-center justify-center font-bold text-sm bg-gray-100 py-4">
                                    <Button className="text-white bg-blue-500 rounded-s font-bold text-m mr-3" type="default">
                                        Ship To Name
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="border">
                        <Col span={4} className="flex items-center justify-center font-bold text-sm py-4 border-r">94</Col>
                        <Col span={5} className="flex items-center justify-center font-bold text-sm py-4 border-r">86</Col>
                        <Col span={5} className="flex items-center justify-center font-bold text-sm py-4 border-r">6</Col>
                        <Col span={5} className="flex items-center justify-center font-bold text-sm py-4 border-r">
                            <Button className="flex text-white bg-gray-300 rounded-s font-bold text-m" type="default">
                                {content.clientName}
                            </Button>
                        </Col>
                        <Col span={5} className="flex items-center justify-center font-bold text-sm py-4">
                            <Button className="text-white bg-gray-300 rounded-s font-bold text-m" type="">
                                {content.shipToName}
                            </Button>
                        </Col>
                    </Row>
                </Col>

                <Col span={9}>
                    <Row className="border w-full h-full">
                        <Col span={6} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4">진척도</Col>
                        <Col span={18}>
                            <Row className="border h-1/2 flex w-full items-center justify-center font-bold text-sm py-4 p-3">
                                <Col className="w-1/5">
                                    실적
                                    <Button className="w-1 text-white bg-blue-400 ml-2 hover:shadow-md" type="primary" shape="circle" size="small">
                                        i
                                    </Button>
                                </Col>
                                <Col className="w-4/5 pl-3">
                                    <Progress strokeLinecap="butt" percent={2.1} size={[, 15]} />
                                </Col>
                            </Row>
                            <Row className="border h-1/2 flex w-full items-center font-bold text-sm py-4 p-3">
                                <Col className="w-1/5">
                                    Billing
                                    <Button className="w-1 text-white bg-blue-400 ml-2 hover:shadow-md" type="primary" shape="circle" size="small">
                                        i
                                    </Button>
                                </Col>
                                <Col className="w-4/5 pl-3">
                                    <Progress strokeLinecap="butt" percent={0} size={[, 15]} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default ProgressBox;
