import { FaRegEdit } from 'react-icons/fa';

const ClassCard = ({ info }) => {

    const handleUpdateClass = () => {

    }

    const { className, status } = info
    return (
        <div className={`card ${status == 'denied' ? 'bg-red-400 text-black' : 'bg-neutral text-neutral-content'}`}>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>Total Enrolled Students: 10</p>
                <div className="mt-4">
                    <hr className="border-gray-200 border-2 w-full" />
                    <p>Status: {status}</p>
                    {status == 'denied' && <p>FeedBack: No, Comments</p>}
                </div>
                <div className="text-end mt-4">
                    <button onClick={handleUpdateClass}><FaRegEdit className='text-4xl' /></button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;