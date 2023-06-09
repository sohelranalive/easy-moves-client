import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const FeedbackModal = ({ isOpen, setIsOpen, singleClass }) => {

    const [axiosSecure] = useAxiosSecure()
    const [, refetch] = useAdmin()


    const handleFeedback = (event) => {
        event.preventDefault();
        const feedback = event.target.feedback.value
        const updateInfo = { feedback }

        axiosSecure.patch(`/class/feedback/${singleClass._id}`, updateInfo)
            .then(updatedData => {
                if (updatedData.data.modifiedCount > 0) {
                    setIsOpen(!isOpen)
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Feedback Send',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            <div className="relative bg-white rounded-lg w-4/12">
                <div className="p-4">
                    <h2 className="text-lg text-center whitespace-ellipsis overflow-hidden font-bold mb-2">Update Class Info</h2>
                    <br />
                    <div className="text-gray-700">

                        <form onSubmit={handleFeedback}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Feedback, why the class is denied?</span>
                                </label>
                                <textarea
                                    name="feedback"
                                    defaultValue={singleClass?.feedback}
                                    placeholder="Write Your Feedback"
                                    className="textarea input-bordered"
                                />
                            </div>
                            <div className=" mt-4 mb-4 space-x-2">
                                <input className="btn btn-primary" type="submit" value="Send" />
                                <button onClick={() => setIsOpen(!isOpen)} className="btn btn-warning">
                                    Close
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;