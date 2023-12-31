import { FaRegEdit } from 'react-icons/fa';
import UpdateCard from './updateCard';
import { useState } from 'react';

const ClassCard = ({ info }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleUpdateClass = () => {
        setIsOpen(true)
    }

    const { className, status, feedback, availableSeats, totalEnrolled, totalSeats } = info
    return (
        <>
            <div className={`card ${status == 'denied' && 'bg-red-400 text-black'} ${status == 'approved' && 'bg-primary text-white'} ${status == 'pending' && 'bg-neutral text-neutral-content'}`}>
                <div className="card-body">
                    <h2 className="card-title">{className}</h2>
                    <p>Total Seats: {totalSeats}</p>
                    <p>Total Enrolled: {totalEnrolled}</p>
                    <p>Available Seats: {availableSeats}</p>
                    <div className="mt-4">
                        <hr className="border-gray-200 border-2 w-full" />
                        <p>Status: {status}</p>
                        {status == 'denied' && <p>FeedBack: {feedback}</p>}
                    </div>
                    <div className="text-end mt-4">
                        <button onClick={handleUpdateClass}><FaRegEdit className='text-4xl' /></button>
                    </div>
                </div>
            </div>
            {isOpen && <UpdateCard
                isOpen={isOpen}
                info={info}
                setIsOpen={setIsOpen}
            >
            </UpdateCard>}
        </>
    );
};

export default ClassCard;