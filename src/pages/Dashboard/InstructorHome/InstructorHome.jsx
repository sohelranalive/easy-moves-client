import useInstructor from "../../../hooks/useInstructor";

const InstructorHome = () => {

    const [instructorStats] = useInstructor()

    console.log(instructorStats);

    return (
        <div>
            <h1>Instructor stat will show here</h1>
        </div>
    );
};

export default InstructorHome;