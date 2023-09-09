import React, {useState} from 'react';
import TitleBox from './components/TitleBox';
import SearchBox from './components/SearchBox';
import ProgressBox from './components/ProgressBox';
import ResultBox from './components/ResultBox';
import './App.css';
import {useRecoilState} from "recoil";
import { contentStore } from './store';

const App = () => {

    const [content, setContent] = useRecoilState(contentStore);
    const [user, setUser] = useState({
        userId: '',
        category: '',
        content: ''
    });
    // const [clientName, setClientName] = useRecoilState(clientNameState);
    // const [shipToName, setShipToName] = useRecoilState(shipToNameState);

    const handleButton_onClick = () => {
        setContent({
            clientName: 'Seyeong',
            shipToName: '신규 사용자입니다'
        })
    }

    // const handleClientNameChange = (e) => {
    //     setClientName(e.target.value);
    // };

    // const handleShipToNameChange = (e) => {
    //     setShipToName(e.target.value);
    // };

    return (
        <>
            <TitleBox />
            <div className="w-full h-full p-6">
                <SearchBox />
                <ProgressBox />
                <ResultBox />
            </div>
        </>
    );
};

export default App;
