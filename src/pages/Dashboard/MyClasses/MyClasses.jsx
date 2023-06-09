import useInstructor from "../../../hooks/useInstructor";
import ClassCard from "./ClassCard";

const MyClasses = () => {

    const [instructorStats] = useInstructor()
    console.log(instructorStats);

    return (
        <div>
            <h1>Total Class: {instructorStats?.length}</h1>
            <div className="grid grid-cols-3 gap-4">
                {instructorStats?.map(info => <ClassCard key={info._id} info={info}></ClassCard>)}
            </div >
        </div>
    );
};

export default MyClasses;