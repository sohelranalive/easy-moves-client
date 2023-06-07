import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import signupImg from '../../assets/signupImg.png'
import Container from "../../components/Container/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";

const image_hosting_server_url = import.meta.env.VITE_IMAGE_HOSTING_TOKEN

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_url_server}`

    const onSubmit = data => {
        setError('')
        if (data.password !== data.confirmPass) {
            setError('Password mismatch')
            return
        }

        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })

    };

    return (
        <div>
            <Container>
                <div className="bg-slate-100 my-12 rounded-lg shadow-2xl md:flex">
                    <div className="md:w-1/2 bg-slate-900 md:rounded-s-2xl py-12 mx-auto">
                        <img src={signupImg} alt="" className="h-full w-full" />
                    </div>
                    <div className="md:w-1/2 px-16 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Signup Here</h1>
                            <p className="font-bold mt-4">Signup and book your class to make your summer camp memorable</p>
                        </div>
                        <div className="divider"></div>
                        <div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Name and Email */}
                                <div className="flex w-full">
                                    <div className="form-control mt-4 w-1/2">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="name"
                                            className="input input-bordered"
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name && <span className="text-red-500 font-bold">Name is required</span>}
                                    </div>
                                    <div className="form-control mt-4 w-1/2 ps-2">
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
                                </div>

                                {/* Password and confirm password */}
                                <div className="flex w-full">
                                    <div className="form-control mt-4 w-1/2">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="password"
                                            className="input input-bordered"
                                            {...register("password",
                                                {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                                })}
                                        />
                                    </div>
                                    <div className="form-control mt-4 w-1/2 ps-2">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input
                                            {...register("confirmPass")}
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="re-type password"
                                            className="input input-bordered"
                                        />
                                    </div>
                                </div>
                                {errors.password && errors.password.type === "required" && (
                                    <span className="text-red-500 font-bold">Password field is required</span>
                                )}
                                {errors.password && errors.password.type === "minLength" && (
                                    <span className="text-red-500 font-bold">Password must be at least 6 characters long</span>
                                )}
                                {errors.password && errors.password.type === "maxLength" && (
                                    <span className="text-red-500 font-bold">Password cannot exceed 20 characters</span>
                                )}
                                {errors.password && errors.password.type === "pattern" && (
                                    <span className="text-red-500 font-bold">Password must include a capital letter and a special character</span>
                                )}
                                <span className="text-red-500 font-bold">{error}</span>
                                <div className="mt-2">
                                    <input
                                        onClick={() => setShowPassword(!showPassword)}
                                        type="checkbox"
                                        className="mr-2"
                                    />
                                    <label>Show Password</label>
                                </div>
                                {/* Gender & Phone number */}
                                <div className="flex w-full">
                                    <div className="form-control mt-4 w-1/2">
                                        <label className="label">
                                            <span className="label-text">Gender(Optional)</span>
                                        </label>
                                        <select className="select select-bordered" {...register("gender")}>
                                            <option value="">Select Gender</option>
                                            <option value="notApplicable">I Will not Share</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-control mt-4 w-1/2 ps-2">
                                        <label className="label">
                                            <span className="label-text">Phone(Optional)</span>
                                        </label>
                                        <input
                                            {...register("phone")}
                                            type='text'
                                            placeholder="Phone"
                                            className="input input-bordered"
                                        />
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address(Optional)</span>
                                    </label>
                                    <textarea
                                        {...register("address")}
                                        className="textarea input-bordered"
                                        placeholder="Address"
                                    />
                                </div>
                                {/* Photo input */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input
                                        {...register("photo", { required: true })}
                                        type="file"
                                        className="file-input file-input-bordered"
                                    />
                                    {errors.photo && <span className="text-red-500 font-bold">Photo is required for ID</span>}
                                </div>
                                {/* Login button */}
                                <div className="form-control mt-8">
                                    <input
                                        type="submit"
                                        className="bg-slate-900 py-2 uppercase font-semibold rounded-md text-white"
                                        value="Login"
                                    />
                                </div>
                            </form>

                            <div className="divider">OR</div>
                            <div className="form-control mt-6">
                                <button className="bg-slate-900 py-2 uppercase font-semibold rounded-md text-white flex items-center justify-center">
                                    <span className="mr-2 text-3xl"><FcGoogle /></span>
                                    <span>Continue with google</span>
                                </button>
                            </div>
                            <div className="form-control mt-8 text-center">
                                <p>Already a user? <span className="underline decoration-2 decoration-slate-900"><Link to='/login'>Please Login</Link></span></p>
                            </div>
                        </div>
                    </div>
                </div >
            </Container >
        </div >
    );
};

export default Signup;