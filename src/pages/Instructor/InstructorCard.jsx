const InstructorCard = ({ instructor }) => {

    console.log(instructor);
    const { name, photo, email } = instructor

    return (
        <div className="card h-full bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="instructor photo" className="rounded-2xl h-60 w-80" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">See classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;