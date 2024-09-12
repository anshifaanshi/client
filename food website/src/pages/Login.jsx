import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // Make sure to import useForm
import { axiosinstance } from '../config/axiosinstance';
import toast from 'react-hot-toast';

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data, "====data");
    
    try {
      const response = await axiosinstance({
        method: 'POST',
        url: "user/login",
        data
      });
      console.log(response, "====response");
      toast.success("Log in successful!"); 
      navigate('http://localhost:3006/api/v1/user/profile'); // Redirect to profile on success
    } catch (error) {
      toast.error("Login failed!");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
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
                  placeholder="email"
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
                  {...register('password')}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to={'/signup'}>New User?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;