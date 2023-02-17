import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";

const Login = () => {
  const { register, handleSubmit , formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data)};
  return (
 <>
 <div className=" lg:min-h-[100vh]  min-h-[70vh] bg-[#F9FAFB] grid place-content-center ">
        <div className="bg-white lg:p-[3rem] md:p-[3rem] p-[1rem] rounded-[.75rem] w-[350px] md:w-[528px] lg:w-[600px] shadow-lg border-[1px] border-[#dbdbdb]">
          <header className="flex items-center justify-between">
            <h1 className="lg:text-[1.6rem] text-[1.1rem] md:text-[1.4rem] font-semibold">Login</h1>
            <p className="text-sm lg:[text-1.2rem] md:text-[1.1rem] ">
              Don&apos;t have an account?{" "}
              <Link className="font-semibold" to="/register">
                Join now
              </Link>
            </p>
          </header>
          <form className="mt-[4.5rem]" onSubmit={handleSubmit(onSubmit)}>
            <label
              className="text-[1rem] text-[#18181B] font-[400]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-[1px] border-[#A1A1AA] lg:h-[3.8rem] h-[2.8rem]  
              lg:rounded-[0.7rem] md:rounded-[0.6rem] md:h-[3.5rem] rounded-[0.5rem] my-3 mb-1 lg:text-[1.4rem] text-[1rem] p-4"
              {...register("email", { 
                required: "Email is required" 
            })}
            />
            {errors.email && <p className="text-red-600 my-1" role="alert">{errors.email?.message}</p>}
            <label
              className="text-[1rem] text-[#18181B] font-[400]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border-[1px] border-[#A1A1AA]  h-[2.8rem]  
              lg:rounded-[0.7rem] md:rounded-[0.6rem] md:h-[3.5rem] rounded-[0.5rem] 
              lg:h-[3.8rem] my-3 mb-1 lg:text-[1.4rem] text-[1rem] p-4"
              type="password"
              id="password"
              {...register("password" , { 
                required: "Password is required" ,
                minLength : { value: 6 , message : "Password must be at least 6 character longer" }
            })}
             
            />
        {errors.password && <p className="text-red-600 my-1" role="alert">{errors.password?.message}</p>}
            <button
           
              className="mt-6 mb-3 text-[1rem] font-semibold hover:bg-black bg-[#18181B] w-full lg:p-[1.2rem] p-[0.85rem]
               md:p-[1.1rem] text-white rounded-[0.7rem] "
            >
              {/* {loading ? <Spinner size={20} /> : "Sign in"} */}
              Login
            </button>
            <Divider />
            <button
           
              className="mt-3 text-[1rem] font-semibold bg-[#ffffff] w-full lg:p-[1.04rem] p-[0.85rem]
               md:p-[1.1rem] text-black rounded-[0.7rem] hover:bg-[#18181B] hover:text-white border-2 border-black "
            >
              {/* {loading ? <Spinner size={20} /> : "Sign in"} */}
             Continue with google
            </button>
          </form>
        </div>
      </div>
 </>
  );
};

export default Login;
