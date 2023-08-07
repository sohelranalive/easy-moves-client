import useInstructor from "../../../hooks/useInstructor";
import ClassCard from "./ClassCard";

const MyClasses = () => {

    const [instructorStats] = useInstructor()
    // console.log(instructorStats);

    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-3xl text-center underline">Your All Classes</h1>
            <br />
            <div className="mt-8">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    {instructorStats?.map(info => <ClassCard key={info._id} info={info}></ClassCard>)}
                </div >
            </div>
        </div>
    );
};

export default MyClasses;