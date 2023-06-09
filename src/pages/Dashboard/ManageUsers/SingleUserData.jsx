const SingleUserData = ({ singleUser }) => {
    return (
        <tr>
            <td>1</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>Ballet</td>
            <td>
                <div className="flex flex-col">
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                </div>
            </td>
            <td>40</td>
            <td>$ 150</td>
            <td>Pending</td>
            <td>
                <button className="btn btn-ghost btn-xs">Approve</button>
                <button className="btn btn-ghost btn-xs">Deny</button>
                <button className="btn btn-ghost btn-xs">Feedback</button>
            </td>
        </tr>
    );
};

export default SingleUserData;