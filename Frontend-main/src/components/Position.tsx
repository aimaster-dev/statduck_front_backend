import React from 'react'
interface PositionProps {
    position: number;
}
const Position: React.FC<PositionProps> = ({ position }) => {
    return (
        <div className="flex-shrink-0 md:mr-4 lg:mr-[115px]">
            <span className="text-2xl">{position}th</span>
        </div>
    )
}

export default Position