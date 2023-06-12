import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {

    const { name, photo, email } = instructor

    return (
        <div className="card h-full bg-slate-800 shadow-2xl text-white">
            <figure className="px-10 pt-10">
                <img src={photo} alt="instructor photo" className="rounded-2xl h-56 w-80 border-2 border-[#AB1318]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <div className="card-actions">
                    <Link to='/classes' className="px-3 rounded-lg py-3 bg-[#AB1318] text-white">View All Class</Link>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;