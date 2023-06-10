import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useLevel = () => {

    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: userLevel, isLoading } = useQuery({
        queryKey: ['checkLevel', user?.email],
        enabled: !loading && user == true,
        queryFn: async () => {
            const result = await axiosSecure.get(`/user/level/${user?.email}`)
            console.log('checking level inside uselevel hook', result.data);
            return result.data
        }
    })

    return [userLevel, isLoading];

};

export default useLevel;