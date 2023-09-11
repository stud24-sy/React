import React, { useState } from 'react';
import {Col, Row} from "antd";
import { Button, Select, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
    const [inputValue, setInputValue] = useState({
        searchWord: '',
        searchManager: '',
        searchOrderNumber: ''
    });

    function updateClearButtonVisibility(event, fieldName) {
        const value = event.target.value;
        setInputValue(prevInputValues => ({
            ...prevInputValues,
            [fieldName]: value
        }));
    }

    function handleClearButtonClick(fieldName) {
        setInputValue(prevInputValues => ({
            ...prevInputValues,
            [fieldName]: ''
        }));
    }

    return (
        <div className="w-full h-full items-center justify-center py-4">
            <>
                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            검색어
                        </div>
                    </Col>
                    <Col span={4} className="flex items-center py-4 p-4">
                        <div className="w-full">
                            <Select
                                className="w-full p-1"
                                defaultValue="계약명"
                                options={[
                                    {
                                        value: '계약명',
                                        label: '계약명',
                                    },
                                    {
                                        value: '계약명1',
                                        label: '계약명1',
                                    },
                                    {
                                        value: '계약명2',
                                        label: '계약명2',
                                    },
                                    {
                                        value: '계약명3',
                                        label: '계약명3',
                                    }
                                ]}
                            />
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="검색어를 입력하세요"
                                   type="text"
                                   value={inputValue.searchWord}
                                   onChange={(e) => updateClearButtonVisibility(e, 'searchWord')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.searchWord ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('searchWord')}
                                >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                    <Col span={2} className="flex items-center py-4 p-4">
                        <div className="w-full">
                            <Button className="w-20 text-white bg-blue-500 hover:shadow-md " type="primary" shape="round">
                                <FontAwesomeIcon
                                    icon={["fas", "search"]}
                                    className="w-5 h-5"
                                />
                            </Button>
                        </div>
                    </Col>
                    <Col span={6} className="flex items-center py-4 border-r">
                        <div className="w-full">
                            <Button className="w-40 border-2 hover:shadow-md pl-6" type="default" shape="round">
                                검색 조건 초기화
                                <FontAwesomeIcon icon={faTimes} className="ml-2" />
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            담당PM
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full relative">
                            <Input className="w-full hover:shadow-md pr-10" placeholder="담당자를 입력해주세요"
                                   type="text"
                                   value={inputValue.searchManager}
                                   onChange={(e) => updateClearButtonVisibility(e, 'searchManager')}
                            >
                            </Input>
                            <button
                                className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.searchManager ? '' : 'hidden'}`}
                                onClick={() => handleClearButtonClick('searchManager')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </Col>
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            진행상태
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full">
                            <Select
                                className={"w-full"}
                                defaultValue="전체"
                                options={[
                                    {
                                        value: '전체',
                                        label: '전체',
                                    },
                                    {
                                        value: '계획 미수립',
                                        label: '계획 미수립',
                                    },
                                    {
                                        value: '진행중',
                                        label: '진행중',
                                    },
                                    {
                                        value: '완료',
                                        label: '완료',
                                    }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="border">
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            작업상태
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full">
                            <Select
                                className={"w-full"}
                                defaultValue="전체"
                                options={[
                                    {
                                        value: '전체',
                                        label: '전체',
                                    },
                                    {
                                        value: '작업 미진행',
                                        label: '작업 미진행',
                                    },
                                    {
                                        value: '작업 진행중',
                                        label: '작업 진행중',
                                    },
                                    {
                                        value: '작업 종료',
                                        label: '작업 종료',
                                    }
                                ]}
                            />
                        </div>
                    </Col>
                    <Col span={4} className="flex items-center justify-center font-bold text-sm bg-gray-100 py-4 border-r">
                        <div>
                            주문번호
                        </div>
                    </Col>
                    <Col span={8} className="flex items-center py-4 p-6 border-r">
                        <div className="w-full flex items-center">
                            <div className="w-full relative pr-3">
                                <Input className="w-full hover:shadow-md pr-10" placeholder="주문번호를 입력해주세요"
                                       type="text"
                                       value={inputValue.searchOrderNumber}
                                       onChange={(e) => updateClearButtonVisibility(e, 'searchOrderNumber')}
                                >
                                </Input>
                                <button
                                    className={`clear-btn absolute top-1 right-4 text-gray-400 hover:text-black ${inputValue.searchOrderNumber ? '' : 'hidden'}`}
                                    onClick={() => handleClearButtonClick('searchOrderNumber')}
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                            <Button className="text-white bg-blue-500" type="primary" shape="round">
                                <FontAwesomeIcon
                                    icon={["fas", "search"]}
                                    className="w-5 h-5"
                                />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </>
        </div>
    );
};

export default SearchBox;
