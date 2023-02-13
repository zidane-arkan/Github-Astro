import React, { useState } from 'react';

const DropdownButton = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownHandler = () => {
        console.log(isOpen);
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative">
            <button
                onClick={dropdownHandler}
                className="text-white bg-[#021B27] font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center"
            >
                {props.text}
                <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                ><path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {isOpen ? (
                <div
                    className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {props.menu.map((item, index) => {
                            return (
                                <li key={index} className="menu">
                                    <a
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        href="#"
                                    >
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default DropdownButton;
