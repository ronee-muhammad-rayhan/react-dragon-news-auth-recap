import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, /* useRef */ } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    // const ref = useRef();
    const { signIn } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        // console.log(email);
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form);
        // console.log(form.get('email'));
        // console.log(form.get('password'));
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            // .then(userCredentials => {
            // console.log(userCredentials.user);
            // form.set('email', '')
            // e.target.reset();
            // ref.current.reset();
            // })
            .catch(error => {
                console.error(error);
            });

    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl text-center my-10">Please Login</h2>
                <form /* ref={ref} */ onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Don&apos;t have an account <Link className="text-blue-600 font-bold" to={'/register'}>Register</Link></p> {/*<!--/*{} // ' === &apos; &lsquo; &rsquo; &#39; -->*/}
            </div>
        </div>
    );
};

export default Login;