import useAdmin from "../../../hooks/useAdmin";

const AdminHome = () => {

    const [adminStats] = useAdmin()
    console.log(adminStats);

    return (
        <div>
            <h1>Total Number of Class: {adminStats?.classResult.length}</h1>
            <h1>Total Number of Users: {adminStats?.userResult.length}</h1>
        </div>
    );
};

export default AdminHome;