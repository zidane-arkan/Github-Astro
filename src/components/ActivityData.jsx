import React from 'react';
import { useStore } from '@nanostores/react';
import { buttonData } from '../store/button';

const ActivityData = () => {
    const $buttonHandler = useStore(buttonData);
    return (
        <div>
            <p className="font-medium text-base">{$buttonHandler}</p>
        </div>
    );
};

export default ActivityData;
