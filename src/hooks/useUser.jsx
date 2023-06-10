import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()

    const { data: userStats, isLoading: isUserLoading, refetch } = useQuery({
        queryKey: ['instructorStats', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/user/stats/${user?.email}`)
            return result.data
        }
    })

    return [userStats, isUserLoading, refetch]
};

export default useUser;