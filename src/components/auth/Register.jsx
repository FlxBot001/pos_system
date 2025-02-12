import React from 'react'

const Register = () => {
  return (
    <div>
        <form action="">
            {/* Name */}
            <div className="">
                <label htmlFor="" className="block text-[#ababab] mb-2 text-sm font-medium">
                    Employee Name
                </label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input 
                        type="text" 
                        name='name'
                        placeholder='Enter Employee name'
                        className="bg-transparent flex-1 text-white focus:outline-none" 
                        required
                    />
                </div>
            </div>

            {/* Email */}
            <div className="">
                <label htmlFor="" className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                    Employee Email
                </label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input 
                        type="email" 
                        name='email'
                        placeholder='Enter Employee email'
                        className="bg-transparent flex-1 text-white focus:outline-none" 
                        required
                    />
                </div>
            </div>

            {/* Phone */}
            <div className="">
                <label htmlFor="" className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                    Employee Phone
                </label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input 
                        type="number" 
                        name='phone'
                        placeholder='Enter phone number'
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
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input 
                        type="password" 
                        name='password'
                        placeholder='Enter password'
                        className="bg-transparent flex-1 text-white focus:outline-none" 
                        required
                    />
                </div>
            </div>

            {/* Role */}
            <div className="">
                <label htmlFor="" className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                        Choose your Role
                </label>

                <div className="flex items-center gap-3 mt-4">
                    {[
                        "Waiter", 
                        "Cashier",
                        "Md",
                        "Admin",
                        "Supervisor",
                    ].map((role) => {
                        return (
                            <button 
                        key={role}
                        type='button'
                        className="px-4 py-3 w-full text-[#ababab] bg-[#1f1f1f] rounded-lg">
                            {role}
                        </button>
                        )
                    })}
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register