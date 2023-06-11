const PopularInstructorCard = ({ instructor }) => {
    const { photo, name, email, address } = instructor;

    return (

        <div className="card h-40 w-11/12 card-side bg-slate-900 shadow-2xl">
            <div className="w-2/6"><img src={photo} alt="Movie" className="h-full w-full" /></div>
            <div className="w-4/6 text-white ps-8 flex flex-col justify-center">
                <h2 className="card-title">{name}</h2>
                <p>Email: {email}</p>
                <p>Address: {address ? address : 'N/A'}</p>
            </div>
        </div>

    );
};

export default PopularInstructorCard;
