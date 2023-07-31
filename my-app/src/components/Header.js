import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4">
            <input
                type="button"
                className="dark-light-btn py-1 px-3 rounded font-bold"
                value=""
            />
            <ul className="flex items-center list-none">
                <li>
                    <a href="https://mail.google.com/" className="px-2 text-black hover:underline">
                        Gmail
                    </a>
                </li>
                <li>
                    <a href="https://www.google.co.kr/imghp?hl=ko&ogbl" className="px-2 text-black hover:underline">
                        이미지
                    </a>
                </li>
                <li>
                    <button className="google-app px-3 py-1 rounded hover:bg-gray-300">
                        <i className="fas fa-th"></i>
                    </button>
                </li>
                <li>
                    <button className="rounded-full p-1 hover:bg-gray-300">
                        <img
                            className="profile-image rounded-full w-8"
                            src="https://avatars.githubusercontent.com/u/78247771?s=400&u=d5fe9c64a08f006b124f01760ee9e92c67a0404c&v=4"
                            alt=""
                        />
                    </button>
                </li>
            </ul>
        </header>
    );
};

export default Header;
