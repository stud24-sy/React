import React from 'react';
import TitleBox from './components/TitleBox';
import SearchBox from './components/SearchBox';
import ProgressBox from './components/ProgressBox';
import ResultBox from './components/ResultBox';
import './App.css';

const App = () => {
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
