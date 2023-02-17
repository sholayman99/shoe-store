import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
 <>
 <div className=" lg:min-h-[100vh] md:min-h-[60vh] min-h-[70vh] bg-[#F9FAFB] grid place-content-center ">
        <div className="bg-white lg:p-[3rem] md:p-[3rem] p-[1rem] rounded-[.75rem] w-[350px] md:w-[528px] lg:w-[600px] shadow-lg border-[1px] border-[#dbdbdb]">
          <header className="flex items-center justify-between">
            <h1 className="lg:text-[1.6rem] text-[1.1rem] md:text-[1.4rem] font-semibold">Login</h1>
            <p className="text-sm lg:[text-1.2rem] md:text-[1.1rem] ">
              Don&apos;t have an account?{" "}
              <Link className="font-semibold" href="/signup">
                Join now
              </Link>
            </p>
          </header>
          <form className="mt-[5rem]" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
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
              lg:rounded-[0.7rem] md:rounded-[0.6rem] md:h-[3.5rem] rounded-[0.5rem] my-4 lg:text-[1.5rem] text-[1rem] p-4"
              {...register("email")}
            />
            <label
              className="text-[1rem] text-[#18181B] font-[400]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border-[1px] border-[#A1A1AA]  h-[2.8rem]  
              lg:rounded-[0.7rem] md:rounded-[0.6rem] md:h-[3.5rem] rounded-[0.5rem] 
              lg:h-[3.8rem] my-4 lg:text-[1.5rem] text-[1rem] p-4"
              type="password"
              id="password"
              {...register("password")}
             
            />
            <button
           
              className="mt-8 text-[1rem] bg-[#18181B] w-full lg:p-[1.2rem] p-[0.85rem]
               md:p-[1.1rem] text-white rounded-[0.7rem] "
            >
              {/* {loading ? <Spinner size={20} /> : "Sign in"} */}
              Login
            </button>
          </form>
        </div>
      </div>
 </>
  );
};

export default Login;
