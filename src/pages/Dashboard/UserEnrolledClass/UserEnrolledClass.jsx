import useUser from "../../../hooks/useUser";
import EnrolledClassCard from "./EnrolledClassCard";

const UserEnrolledClass = () => {

    const [userStats] = useUser()
    const enrolledClasses = userStats.enrolledClassResult;

    console.log(enrolledClasses);

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl text-center underline">Your All Enrolled Classes</h1>
            <br />
            <div className="grid grid-cols-2 gap-4">
                {enrolledClasses?.map(enrolledClass => <EnrolledClassCard
                    key={enrolledClass._id}
                    enrolledClass={enrolledClass}>
                </EnrolledClassCard>)}
            </div >
        </div>
    );
};

export default UserEnrolledClass;