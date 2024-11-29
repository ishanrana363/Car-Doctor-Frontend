import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((res) => {
                console.log('User logged in: ', res);
                // Optionally navigate to another page or show a success message
            })
            .catch((err) => {
                console.error('Error logging in: ', err);
                alert('Error logging in: ' + err.message);
            });

        e.target.reset();
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content items-center flex-col lg:flex-row">
                    <div className="text-center w-1/2 mr-20">
                        <img
                            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732584559/Access_control_system_2__1_hzjwda.png"
                            alt="Login Illustration"
                        />
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-3xl text-center mt-6 font-bold">Login Now!</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                        <p className="text-center mt-4 mb-3">
                            Don’t have an account?{' '}
                            <Link className="text-orange-600" to="/sign-up">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
