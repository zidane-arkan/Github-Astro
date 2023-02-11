import React from 'react';
import { useStore } from '@nanostores/react';
import { isActivity } from '../store/buttonStore';

const ShowText = () => {
    const $isActivity = useStore(isActivity);
    return (
        <p>
            {$isActivity ? "Is Active" : "Is Not"}
        </p>
    );
};

export default ShowText;
