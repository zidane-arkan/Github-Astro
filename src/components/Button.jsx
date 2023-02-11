import React from 'react';
import { useStore } from '@nanostores/react';
import { isActivity } from '../store/buttonStore';

const Button = () => {
    const $isActivity = useStore(isActivity);
    const btnHandler = () => {
        console.log($isActivity);
        isActivity.set(!$isActivity);
    };
    return (
        <button onClick={btnHandler} className="text-[#559DE6] bg-[#21262D] font-base rounded-lg text-sm px-8 py-4 text-center inline-flex items-center">
            Show More Activity
        </button>
    );
};

export default Button;
