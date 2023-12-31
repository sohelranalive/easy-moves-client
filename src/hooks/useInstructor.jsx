import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()

    const { data: instructorStats, isLoading: isInstructorLoading, refetch } = useQuery({
        queryKey: ['instructorStats', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/instructor/stats/${user?.email}`)
            return result.data
        }
    })

    return [instructorStats, isInstructorLoading, refetch]
};

export default useInstructor;