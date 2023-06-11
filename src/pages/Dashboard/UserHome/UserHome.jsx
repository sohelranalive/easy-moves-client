import useUser from "../../../hooks/useUser";

const UserHome = () => {

    const [userStats] = useUser()
    console.log(userStats);

    return (
        <div>
            <h1>All the content will show here</h1>

        </div>
    );
};

export default UserHome;