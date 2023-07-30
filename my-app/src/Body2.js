import React from 'react'
import {useState} from 'react'
import { AiOutlineSearch, AiOutlineAudio, AiOutlinePicture, AiOutlineCamera } from 'react-icons/ai';
// import { IoIosPolaroid } from 'react-icons/io5';
// import { FaPolaroid } from 'react-icons/fa6';
//
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//
// library.add(fas, faTwitter, faFontAwesome)


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-4">
                <div className="relative flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm">
                    <AiOutlineSearch className="w-6 h-6 text-gray-500" />
                    <input
                        id="search"
                        name="search"
                        className="w-full pl-10 bg-transparent focus:outline-none"
                        placeholder="Search"
                        type="search"
                    />
                    <button className="w-12 h-12 mr-2 bg-white rounded-full focus:outline-none">
                        {/*<FontAwesomeIcon icon="fa-solid f-microphone" />*/}
                    </button>
                    <button className="w-12 h-12 mr-2 bg-white rounded-full focus:outline-none">
                        <AiOutlineAudio className="w-6 h-6 text-gray-500" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full focus:outline-none">
                        <AiOutlinePicture className="w-6 h-6 text-gray-500" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full focus:outline-none">
                        <AiOutlineCamera className="w-6 h-6 text-gray-500" />
                    </button>
                    <button className="w-12 h-12 mr-2 bg-white rounded-full focus:outline-none">
                        {/*<IoIosPolaroid className="w-6 h-6 text-gray-500" />*/}
                    </button>
                    <button className="w-12 h-12 mr-2 bg-white rounded-full focus:outline-none">
                         {/*<FaPolaroid className="w-6 h-6 text-gray-500" />*/}
                    </button>
                </div>
            </div>
        </div>
    )
}
