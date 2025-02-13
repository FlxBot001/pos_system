import React, { useState } from 'react';
import { useMutation } from "@tanstack/react-query";

const login = async (reqData) => {
    const response = await fetch("/api/login", {  // Change URL to your API endpoint
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return response.json();
};


const Login = () => {

    const[formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation.mutate(formData);
    }

    const loginMutation = useMutation({
        mutationFn: (reqData) => login(reqData),
        onSuccess: (res) => {
            const { data } = res;
            console.log(data);
        },

        onError: (error) => {
            console.log(error);
        }
    })

  return (
    <div>
        <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="">
                <label htmlFor="" className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                    Employee Email
                </label>
                <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input 
                        type="email" 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter Employee email'
                        className="bg-transparent flex-1 text-white focus:outline-none" 
                        required
                    />
                </div>
            </div>

            {/* password */}
            <div className="">
                <label htmlFor="" className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                    Password
                </label>
                <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input 
                        type="password" 
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Enter password'
                        className="bg-transparent flex-1 text-white focus:outline-none" 
                        required
                    />
                </div>
            </div>

            {/* Submit button */}
            <button
                    type='submit'
                    className="bg-yellow-400 w-full mt-6 py-3 text-lg text-gray-900 font-bold rounded-lg"
            >
                Sign up
            </button>
        </form>
    </div>
  )
}

export default Login