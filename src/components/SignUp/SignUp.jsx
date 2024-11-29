
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSubmit = (e) => {
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password).then((user) => {
            console.log('User created: ', user);
        }).catch((error) => {
            console.error('Error creating user: ', error);
            alert('Error creating user: ', error.message);
        });
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content items-center flex-col lg:flex-row">
                    <div className="text-center w-1/2 mr-20 ">
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732584559/Access_control_system_2__1_hzjwda.png" alt="" />
                    </div>
                    <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-3xl text-center mt-6  font-bold">Sign Up!</h1>
                        <form onSubmit={handleSubmit} >
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                    <label className="label">
                                    </label>
                                </div>
                                <div className="form-control -mt-5 ">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </form>
                        <p className='text-center -mt-4 mb-3 ' >You have already account? <Link className='text-orange-600' to={"/login"} >Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp

