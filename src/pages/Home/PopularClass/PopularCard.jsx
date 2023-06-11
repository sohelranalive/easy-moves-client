import { useState } from "react";

import ReactCardFlip from 'react-card-flip';
import { Link } from "react-router-dom";

const PopularCard = ({ singleClass }) => {

    const { classPhoto, instructorName, className } = singleClass

    const [flipped, setFlipped] = useState(false)

    return (
        <Link to='/classes'>
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal" flipSpeedBackToFront={0.9}>

                <div onMouseEnter={() => setFlipped(!flipped)}
                    onMouseLeave={() => setFlipped(!flipped)}>
                    <div className="w-80 h-80">
                        <img src={classPhoto} className="w-full h-full rounded-2xl shadow-2xl" alt="" />
                    </div>
                </div>

                <div>
                    <div className="w-80 h-80 rounded-2xl shadow-inner bg-neutral opacity-90 text-white">
                        <div className="flex flex-col justify-center items-center h-full space-y-2">
                            <h1 className="text-4xl">{className}</h1>
                            <h2 className="text-2xl">By {instructorName}</h2>
                            <br />
                            <h2 className="text-xl text-center">Visit our all classes section for more details</h2>
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </Link>
    );
};

export default PopularCard;