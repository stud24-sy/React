import React from 'react';
import { FormControl, Button } from 'react-bootstrap';

// 주의 : MyForm 컴포넌트의 props로 handleSearch 함수를 전달해주기 위해 매개변수로 받도록 함.
const MyForm = () => {
    return (
        <div>
            {/* FormControl을 사용한 input 박스 */}
            <FormControl type="text" placeholder="이곳에 입력해주세요" />

            {/* 버튼 */}
            <Button variant="primary">전송</Button>  {/* handleSearch 함수를 호출하는 코드 */}
        </div>
    );
};

export default MyForm;