import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserHome = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()

    const { data: userStats } = useQuery({
        queryKey: ['userStats', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/user/stats/${user.email}`)
            return result.data
        }
    })
    console.log(userStats);

    return (
        <div>
            <h1>All the content will show here</h1>

        </div>
    );
};

export default UserHome;