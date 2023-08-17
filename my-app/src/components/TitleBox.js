import React from 'react';

const TitleBox = () => {
    return (
        <section className="title">
            <div className="flex w-full items-center font-semibold text-xl bg-gray-100 py-4">
                <span className="material-icons ml-4 mr-2 text-gray-700">folder</span>
                <span className="font-bold text-gray-700">작업 현황</span>
            </div>
        </section>
    );
};

export default TitleBox;
