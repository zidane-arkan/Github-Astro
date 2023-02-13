import React from 'react';
import { useStore } from '@nanostores/react';
import { buttonData } from '../store/button';

const Button = (props) => {
    const $buttonData = useStore(buttonData);
    const showData = () => {
        console.log($buttonData);
        buttonData.set("Halo Juga");
    };
    return (
        <button
            onClick={showData}
            className="text-[#559DE6] bg-[#21262D] font-base rounded-lg text-sm px-8 py-4 text-center inline-flex items-center"
        >
            {props.text}
        </button>
    );
};

export default Button;
