import React, {useState} from 'react';

const Body = () => {
    const [searchValue, setSearchValue] = useState('');

    function updateClearButtonVisibility(event) {
        const value = event.target.value;
        setSearchValue(value);
    }

    function handleClearButtonClick() {
        setSearchValue('');
    }

    return (
        <section className="middle">
            <div className="google-logo w-full mx-auto flex justify-center mt-40"> {/* Updated line */}
                <img
                    className="logo-image w-273 h-auto"
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    alt=""
                    href="https://www.google.com/"
                />
            </div>
            <div className="search-box mx-auto relative w-1/3 justify-center mt-9">
                <div className="relative">
                    <span className="search-icon absolute top-3 left-5 text-gray-600"><i className="fas fa-search"></i></span>
                    <span className="keyboard-icon absolute top-3 right-7 text-gray-400"><i
                        className="far fa-keyboard"></i></span>
                    <span className="microphone-icon absolute top-3 right-16 text-blue-500"><i
                        className="fas fa-microphone"></i></span>

                    <button
                        className={`clear-btn absolute top-3 right-24 text-gray-400 hover:text-black ${searchValue ? '' : 'hidden'}`}
                        onClick={handleClearButtonClick}>
                        <i className="fas fa-times"></i>
                    </button>
                    <input
                        className="search-bar w-full h-12 rounded-3xl border border-gray-300 pl-14 pr-36 text-black font-medium focus:outline-none hover:shadow-md mx-auto"
                        type="text"
                        placeholder="Google 검색 또는 URL 입력"
                        value={searchValue}
                        onChange={updateClearButtonVisibility}
                    />

                </div>
                {/*<div className={`relative group`}>
                    <button className={`clear-btn px-3 py-1 rounded hover:bg-gray-300 group-hover:flex invisible`}>
                        <div className="rounded-full w-12 h-12 bg-gray-200 flex justify-center items-center text-black text-3xl absolute top-3 right-60 mt-2">
                            <span>+</span>
                        </div>
                        <div className="tile-title w-full absolute flex justify-center items-center text-right top-3 right-2 mt-16">
                            <span>바로가기 추가</span>
                        </div>
                    </button>
                </div>*/}
            </div>
        </section>
    );
};

export default Body;
