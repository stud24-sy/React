import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {Squares2X2Icon} from "@heroicons/react/20/solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://avatars.githubusercontent.com/u/78247771?s=400&u=d5fe9c64a08f006b124f01760ee9e92c67a0404c&v=4',
}
const navigation = [
    {name: 'Dashboard', href: '#', current: true},
    {name: 'Team', href: '#', current: false},
    {name: 'Projects', href: '#', current: false},
    {name: 'Calendar', href: '#', current: false},
    {name: 'Reports', href: '#', current: false},
]
const userNavigation = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav">
                    {({open}) => (
                        <>
                            <div className="mx-auto  px-4 sm:px-6 lg:px-4">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <div className="-m-2 ml-5 p-2">
                                                <button type="button" className="text-sm leading-6 flex items-center">
                                                    Gmail
                                                </button>
                                            </div>
                                            <div className="-m-2 ml-5 p-2">
                                                <button type="button" className="text-sm leading-6 flex items-center">
                                                    이미지
                                                </button>
                                            </div>
                                            <button type="button"
                                                    className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                                <span className="sr-only">View grid</span>
                                                <Squares2X2Icon className="h-5 w-5" aria-hidden="true"/>
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative -m-2 ml-5 p-2">
                                                <div>
                                                    <Menu.Button
                                                        className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="absolute -inset-1.5"/>
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl}
                                                             alt=""/>
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items
                                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({active}) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button
                                            className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-0.5"/>
                                            <span className="sr-only">Open main menu</span>
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}
