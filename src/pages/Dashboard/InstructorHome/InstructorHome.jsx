import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const InstructorHome = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()

    const { data: instructorStats } = useQuery({
        queryKey: ['instructorStats', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/instructor/stats/${user.email}`)
            return result.data
        }
    })
    console.log(instructorStats);

    return (
        <div>
            <h1>Instructor stat will show here</h1>
        </div>
    );
};

export default InstructorHome;