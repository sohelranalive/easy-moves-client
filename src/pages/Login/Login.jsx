import Container from "../../components/Container/Container";
import Lottie from "lottie-react";
import loginLottie from "../../assets/loginImg.json";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";


const Login = () => {

    const { userLogIn } = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        userLogIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                if (loggedUser) {
                    reset()
                    navigate('/')
                }
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <Container>
                <div className="bg-slate-100 my-12 rounded-lg shadow-2xl md:flex">
                    <div className="md:w-1/2 bg-[#AB1318] md:rounded-s-2xl py-12">
                        {/* <img src={loginImg} alt="" /> */}

                        <Lottie animationData={loginLottie} className='h-full w-full' />

                    </div>
                    <div className="md:w-1/2 px-16 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Login Here</h1>
                            <p className="font-bold mt-4">Login here to join the biggest event of this year !</p>
                        </div>
                        <div className="divider"></div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className="text-red-500 font-bold">Email is required</span>}
                                </div>
                                <div className="form-control mt-4">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type={showPassword ? 'text' : 'password'} placeholder="password"
                                        className="input input-bordered"
                                        {...register("password", { required: true })}
                                    />
                                    {errors.password && <span className="text-red-500 font-bold">Password is required</span>}
                                </div>
                                <div className="mt-2">
                                    <input
                                        onClick={() => setShowPassword(!showPassword)}
                                        type="checkbox"
                                        className="mr-2"
                                    />
                                    <label>Show Password</label>
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        type="submit"
                                        className="bg-[#AB1318] py-2 uppercase font-semibold rounded-md text-white cursor-pointer"
                                        value="Login"
                                    />
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <div className="form-control mt-6">
                                <GoogleLogin color="login"></GoogleLogin>
                            </div>
                            <div className="form-control mt-8 text-center">
                                <p>New here? <span className="underline decoration-2 decoration-[#AB1318]"><Link to='/signup'>Please Sign Up</Link></span></p>
                            </div>
                        </div>
                    </div>
                </div >
            </Container >
        </div >
    );
};

export default Login;