import {atom} from 'recoil';

/**
 * Client Name, Ship To Name 저장소
 */

export const contentStore = atom({
    key: 'contentStore',
    default: {
        clientName: '저장소 값',
        shipToName: '저장소 값',
    }
});

export const customerContentStoreAtom = atom({ // 변수 이름 변경
    key: 'customerContentStore',
    default: {
        clientName: '',
        shipToName: '',
        soldToName: '',
        billToName: ''
    },
});
