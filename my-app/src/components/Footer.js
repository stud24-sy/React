import React from 'react';

const Footer = () => {
    return (
        <footer className="flex justify-between items-center bg-gray-200 h-20 fixed bottom-0 w-full">
            <div className="country-info ml-8 text-gray-500">대한민국</div>
            <div className="instruction mr-8 text-gray-500">
                <ul className="flex list-none">
                    <li className="mr-6">
                        <a href="#" className="text-gray-500 hover:underline">
                            Google 정보
                        </a>
                    </li>
                    <li className="mr-6">
                        <a href="#" className="text-gray-500 hover:underline">
                            광고
                        </a>
                    </li>
                    <li className="mr-6">
                        <a href="#" className="text-gray-500 hover:underline">
                            비즈니스
                        </a>
                    </li>
                    <li className="mr-6">
                        <a href="#" className="text-gray-500 hover:underline">
                            검색의 원리
                        </a>
                    </li>
                    <li className="mr-6">
                        <a href="#" className="text-gray-500 hover:underline">
                            개인정보처리방침
                        </a>
                    </li>
                    <li className="mr-6">
                        <a href="#" className="text-gray-500 hover:underline">
                            약관
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:underline">
                            설정
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
