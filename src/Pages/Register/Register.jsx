import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

// use context api and access create user 
  const {createUser} = useContext(AuthContext);


    const handleRegister =  e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const name = e.target.name.value;
        console.log(email, password, name, photo); 

        // createUSer 

        createUser(email, password)
        .then(result =>{
          console.log(result.user)

        })
        .catch(error =>{
          console.error(error)
        })
    }
    return (
        <div>
             <div>
            <Navbar></Navbar>

            <h2 className="text-2xl">this is login</h2>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="mb-6 text-5xl font-bold">Please Register!!!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
           name='email' placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"
           name='name' placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url </span>
          </label>
          <input type="text"
           name='photo' placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
          name = 'password'
          
          placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      <p> Already Have an account ? <Link className='font-bold text-blue-600' to='/login'> Login </Link> </p>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Register;