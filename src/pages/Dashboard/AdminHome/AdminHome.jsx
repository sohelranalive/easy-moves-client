import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()

    const { data: adminStats } = useQuery({
        queryKey: ['adminStats', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/admin/stats/${user.email}`)
            return result.data
        }
    })

    console.log(adminStats);

    return (
        <div>
            <h1>Admin stats will show here</h1>
        </div>
    );
};

export default AdminHome;