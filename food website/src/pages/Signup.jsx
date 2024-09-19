import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { axiosinstance } from '../config/axiosinstance'; // Make sure this is correctly imported

function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false); // Track success

  const onSubmit = async (data) => {
    console.log(data, "====data");
    try {
      const response = await axiosinstance({
        method: 'POST',
        url: "/user/signup",
        data,
      });
      console.log(response, "====response");
      toast.success("Signup successful!");
      setIsSuccess(true); // Set success state to true
    } catch (error) {
      toast.error("Signup failed!");
      console.log(error);
    }
  };

  // Use useEffect to navigate when signup is successful
  useEffect(() => {
    if (isSuccess) {
      navigate('/user/profile'); // Redirecting to user profile after signup
    }
  }, [isSuccess, navigate]);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  {...register('email')} 
                  placeholder="Email" 
                  className="input input-bordered" autoComplete='off'
                  required 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
                  type="password" 
                  {...register('password')} 
                  placeholder="Password" autoComplete='off' 
                  className="input input-bordered" 

                  required 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                  type="text" 
                  {...register('name')} 
                  placeholder="Your name" 
                  className="input input-bordered" 
                  required 
                />
              </div>
              <label className="label">
                <Link to={'/login'}>Existing User?</Link>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

