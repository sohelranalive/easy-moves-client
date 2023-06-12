import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = ({ color, from }) => {

    const { googleLogIn } = useAuth()

    const navigate = useNavigate()
    const target = from || '/'
    console.log(target);


    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const loggedUser = result.user
                const { displayName, email, photoURL } = loggedUser;
                const newUserInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    gender: "",
                    phone: "",
                    address: "",
                    role: 'user'
                }

                const urlToFindUserFromDB = `https://b7a12-summer-camp-server-side-sohelranalive.vercel.app/user?email=${email}`
                fetch(urlToFindUserFromDB)
                    .then(res => res.json())
                    .then(data => {
                        if (!data.userExist) {
                            fetch('https://b7a12-summer-camp-server-side-sohelranalive.vercel.app/user', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(newUserInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.insertedId) {
                                        navigate(target)
                                    }
                                })
                        }
                        navigate(target)
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <button onClick={handleGoogleLogin} className={` ${color == 'signup' ? 'bg-slate-900' : 'bg-[#AB1318]'} py-2 uppercase font-semibold rounded-md text-white flex items-center justify-center`}>
            <span className="mr-2 text-3xl"><FcGoogle /></span>
            <span>Continue with google</span>
        </button>
    );
};

export default GoogleLogin;