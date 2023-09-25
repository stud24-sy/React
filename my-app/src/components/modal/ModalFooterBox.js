import React from 'react';
import {Button} from "antd";
import axios from "axios";
import {useRecoilState} from 'recoil';
import {contentStore, customerContentStoreAtom} from '../../store';
import Joi from "joi";

const ModalFooterBox = ({user, setUser, closeModal}) => {
    const newUser = {
        userId: 'Seyeong',
        category: '사람',
        content: '신규 사용자입니다'
    };

    const updateUser = {
        userId: 'Seyeong',
        category: '수정된 사람',
        content: '수정된 사용자입니다'
    }

    const [content, setContent] = useRecoilState(contentStore);
    const [customerContentStore, setCustomerContentStore] = useRecoilState(customerContentStoreAtom);


    const validateUser = () => {
        let clientName = customerContentStore.clientName;
        let shipToName = customerContentStore.shipToName;
        let soldToName = customerContentStore.soldToName;
        let billToName = customerContentStore.billToName;

        const userSchema = Joi.object({
            clientName : Joi.string()
                .min(2)
                .pattern(new RegExp('^[가-힣a-zA-Z]{2,}$'))
                .required()
                .messages({
                    'string.empty': '고객명을 입력해주세요.',
                    'string.min': '고객명은 최소 2자 이상이어야 합니다.',
                    'string.pattern.base': '고객명은 한글과 영문 대/소문자로만 이루어져야 합니다.',
                }),
            soldToName : Joi.string()
                .min(2)
                .pattern(new RegExp('^[가-힣a-zA-Z]{2,}$'))
                .required()
                .messages({
                    'string.empty': '구매자명를 입력하세요.',
                    'string.min': '구매자명은 최소 2자 이상이어야 합니다',
                    'string.pattern.base': '구매자명은 한글과 영문 대/소문자로만 이루어져야 합니다.',
                }),
            billToName: Joi.string()
                .min(2)
                .pattern(new RegExp('^[가-힣a-zA-Z]{2,}$'))
                .required()
                .messages({
                    'string.empty': '청구지명을 입력하세요.',
                    'string.min': '청구지명은 최소 2자 이상이어야 합니다',
                    'string.pattern.base': '청구지명은 한글과 영문 대/소문자로만 이루어져야 합니다.',
                }),
            shipToName : Joi.string()
                .min(8)
                .pattern(new RegExp('^(?=.*[가-힣a-zA-Z]){1,}(?=.*\\d){1,}(?=.*[@#$%^&+=!]){1,}.+$'))
                .required()
                .messages({
                    'string.empty': '배송지를 입력하세요.',
                    'string.min': '배송지는 최소 8자 이상이어야 합니다.',
                    'string.pattern.base': '배송지는 한글 또는 영문 대/소문자, 숫자, 특수 기호가 모두 포함되어야 합니다.',
                }),
        });

        const result = userSchema.validate({
            clientName: clientName,
            shipToName: shipToName,
            soldToName: soldToName,
            billToName: billToName,
        });

        if (result.error) {
            alert(result.error.message);
            return;
        }
        alert("유효성 검사를 통과하였습니다.");
    };

    const saveRecoil = () => {
        setContent({
            clientName: customerContentStore.clientName,
            shipToName: customerContentStore.shipToName
        });
        closeModal();
    };

    const getUserInfo = async () => {

        await axios.get(`https://ems-dev-api.sysnova.kr/api/edu/get?userId=` + newUser.userId)
            .then((response) => {
                setUser(setUserData(response));
            })
            .catch((error) => {
                alert("사용자 정보 불러오기 실패 : " + JSON.stringify(error.response.data));
            });

        function setUserData(response) {
            if (response.data.data.length === 0) {
                alert("사용자가 존재하지 않습니다.");
                return {
                    userId: '',
                    category: '',
                    content: ''
                };
            }

            return response.data.data[0];
        }
    }

    const addUserInfo = async () => {

        /**
         *
         * const newUser = {
         *     userId: 'Seyeong',
         *     category: '사람',
         *     content: '신규 사용자입니다'
         * };
         *
         */

        // 서버에서 HTML 폼의 전송 방식으로 데이터를 처리하고 있는 것으로 예상됨
        await axios.post(`https://ems-dev-api.sysnova.kr/api/edu/post`, newUser, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                alert("사용자 정보를 저장했습니다.");
            })
            .catch((error) => {
                alert("사용자 정보 저장하기 실패 : " + JSON.stringify(error.response.data));
            });
    }

    const updateUserInfo = async () => {
        await getUserInfo();

        if (user.userId !== updateUser.userId) {
            return;
        }

        await axios.put(`https://ems-dev-api.sysnova.kr/api/edu/put`, updateUser, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((response) => {
                getUserInfo();
                alert("사용자 정보를 수정했습니다.");
            })
            .catch((error) => {
                alert("사용자 정보 수정하기 실패 : " + JSON.stringify(error.response.data));
            });
    }

    const deleteUserInfo = async () => {
        await getUserInfo();

        if (user.userId !== updateUser.userId) {
            return;
        }

        await axios.delete(`https://ems-dev-api.sysnova.kr/api/edu/delete?userId=` + newUser.userId)
            .then((response) => {
                setUser({
                    userId: '',
                    category: '',
                    content: ''
                });
                alert("사용자 정보를 삭제했습니다.");

            })
            .catch((error) => {
                alert("사용자 정보 삭제하기 실패 : " + error);
                alert("사용자 정보 삭제하기 실패 : " + JSON.stringify(error.response.data));
            });
    }

    return (
        <section className="footer flex justify-end mt-6">
            <Button type="default" className="mr-3 rounded-s border-2 font-bold text-m text-blue-500"
                    onClick={closeModal}>
                닫기
            </Button>
            <Button className="text-white bg-red-600 rounded-s font-bold text-m mr-3" type="default"
                    onClick={deleteUserInfo}>
                삭제
            </Button>
            <Button className="text-white bg-blue-500 rounded-s font-bold text-m mr-3" type="default"
                    onClick={updateUserInfo}>
                수정 저장
            </Button>
            <Button className="text-white bg-blue-500 rounded-s font-bold text-m mr-3" type="default"
                    onClick={addUserInfo}>
                신규 저장
            </Button>
            <Button className="text-white bg-blue-500 rounded-s font-bold text-m mr-3" type="default"
                    onClick={getUserInfo}>
                내용 호출
            </Button>
            <Button className="text-white bg-blue-500 rounded-s font-bold text-m mr-3" type="default"
                    onClick={saveRecoil}>
                Recoil 저장
            </Button>
            <Button className="text-white bg-blue-500 rounded-s font-bold text-m mr-3" type="default"
                    onClick={validateUser}>
                유효성 검사
            </Button>
        </section>
    );
}

export default ModalFooterBox;
