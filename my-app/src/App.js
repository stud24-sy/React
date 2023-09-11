import React from 'react';
import TitleBox from './components/TitleBox';
import SearchBox from './components/SearchBox';
import ProgressBox from './components/ProgressBox';
import ResultBox from './components/ResultBox';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";

const App = () => {

    library.add(fab, far, fas);

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
