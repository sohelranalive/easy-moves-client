import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()

    const { data: adminStats, refetch } = useQuery({
        queryKey: ['adminStats', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/admin/stats/${user.email}`)
            return result.data
        }
    })

    return [adminStats, refetch]
};

export default useAdmin;