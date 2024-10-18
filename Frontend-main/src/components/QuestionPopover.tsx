import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

const QuestionPopover = () => {
    return (
        <>
            <div className="popover popover-hover">
                <label className="popover-trigger my-2 btn bg-transparent">
                    <QuestionMarkCircleIcon className="h-6 w-6 text-primary" />
                </label>
                <div className="popover-content">
                    <div className="popover-arrow"></div>
                    <div className="p-4 text-sm">And here's some amazing content. It's very engaging. Right?</div>
                </div>
            </div>
        </>
    );
};

export default QuestionPopover;
