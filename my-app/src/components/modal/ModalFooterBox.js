import React, {useEffect} from 'react';
import {Button} from "antd";
import axios from "axios";

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

    useEffect(() => {
        alert("(ModalFooterBox) useEffect 실행됨");
    }, []);

    const getUserInfo = async () => {
        if (user.userId !== newUser.userId) {
            user.userId = newUser.userId;
        }

        await axios.get(`https://ems-dev-api.sysnova.kr/api/edu/get?userId=` + user.userId)
            .then((response) => {
                setUser(setUserData(response));
            })
            .catch((error) => {
                alert("사용자 정보 불러오기 실패 : " + JSON.stringify(error.response.data));
            });

        function setUserData(response) {
            if (response.data.data.length === 0) {
                alert("존재하지 않는 사용자입니다.");
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
            alert("수정할 사용자가 존재하지 않습니다.")
            return;
        }

        await axios.put(`https://ems-dev-api.sysnova.kr/api/edu/put`, updateUser, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((response) => {
                alert('response.data : ' + JSON.stringify(response.data));
                alert("사용자 정보를 수정했습니다.");
            })
            .catch((error) => {
                alert("사용자 정보 수정하기 실패 : " + JSON.stringify(error.response.data));
            });
    }

    const deleteUserInfo = async () => {
        await getUserInfo();

        if (user.userId !== updateUser.userId) {
            alert("삭제할 사용자가 존재하지 않습니다.")
            return;
        }

        await axios.delete(`https://ems-dev-api.sysnova.kr/api/edu/delete?userId=` + newUser.userId)
            .then((response) => {
                alert("사용자 정보를 삭제했습니다.");
            })
            .catch((error) => {
                alert("사용자 정보 삭제하기 실패 : " + error);
                alert("사용자 정보 삭제하기 실패 : " + JSON.stringify(error.response.data));
            });
    }

    return (
        <section className="footer flex justify-end mt-6">
            <Button type="default" shape="round" className="mr-3" onClick={closeModal}>
                닫기
            </Button>
            <Button className="text-white bg-blue-500" type="default" shape="round" className="mr-3"
                    onClick={deleteUserInfo}>
                삭제
            </Button>
            <Button className="text-white bg-blue-500" type="default" shape="round" className="mr-3"
                    onClick={updateUserInfo}>
                수정 저장
            </Button>
            <Button className="text-white bg-blue-500" type="default" shape="round" className="mr-3"
                    onClick={addUserInfo}>
                신규 저장
            </Button>
            <Button className="text-white bg-blue-500" type="default" shape="round" className="mr-3"
                    onClick={getUserInfo}>
                내용 호출
            </Button>
        </section>
    );
}

export default ModalFooterBox;
