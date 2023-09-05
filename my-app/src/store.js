import { atom } from 'recoil';

/**
 * Client Name, Ship To Name 저장소
 */

export const contentStore = atom({
    key: 'contentStore',
    default: {
        clientName: '', // 이 두 가지 항목을 여러 컴포넌트에서 공유하여 사용할 예정입니다.
        shipToName: ''
    }
});
