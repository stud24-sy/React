import React from 'react';
import './App.css';

const { useState } = React;

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        alert(`검색어: ${searchQuery}`);
    };

    return (
        <div className="app">
            <header className="App-header">
                <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google"
                    className="app__logo"
                />
                <div className="app__searchContainer">
                    <input
                        type="text"
                        className="app__searchInput"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        //
                    />
                    <button className="app__searchButton" onClick={handleSearch}>
                        Google 검색
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
