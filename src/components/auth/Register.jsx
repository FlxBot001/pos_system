// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        role: ""
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        console.log(`Input changed: ${e.target.name} = ${e.target.value}`);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(""); // Reset error when user types
    };

    const handleRoleSelection = (selectedRole) => {
        console.log(`Role selected: ${selectedRole}`);
        setFormData({
            ...formData,
            role: selectedRole
        });
    };

    const togglePasswordVisibility = () => {
        console.log(`Password visibility toggled: ${!passwordVisible}`);
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        console.log(`Confirm password visibility toggled: ${!confirmPasswordVisible}`);
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);

        if (formData.password !== formData.confirmPassword) {
            console.error("Passwords do not match!");
            setError("Passwords don't match!");
            return;
        }
        
        console.log("Registration successful!");
        // Add API call here
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block text-[#ababab] mb-2 text-sm font-medium">
                        Employee Name
                    </label>
                    <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                        <input 
                            type="text" 
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter Employee name'
                            className="bg-transparent flex-1 text-white focus:outline-none" 
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
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

                <div>                    
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                        Employee Phone
                    </label>
                    <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                        <input 
                            type="number" 
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='Enter phone number'
                            className="bg-transparent flex-1 text-white focus:outline-none" 
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                        Password
                    </label>
                    <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f] relative">
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter password'
                            className="bg-transparent flex-1 text-white focus:outline-none" 
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-4 text-gray-400"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                        </button>
                    </div>
                </div>

                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                        Confirm Password
                    </label>
                    <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f] relative">
                        <input 
                            type={confirmPasswordVisible ? "text" : "password"} 
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder='Confirm password'
                            className="bg-transparent flex-1 text-white focus:outline-none" 
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-4 text-gray-400"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            {confirmPasswordVisible ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>

                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                        Choose your Role
                    </label>
                    <div className="flex items-center gap-3 mt-4">
                        {["Waiter", "Cashier", "Md", "Admin", "Supervisor"].map((role) => (
                            <button 
                                key={role}
                                type='button'
                                onClick={() => handleRoleSelection(role)}
                                className={`px-4 py-3 w-full text-[#ababab] bg-[#1f1f1f] rounded-lg ${
                                    formData.role === role ? "bg-amber-950" : ""
                                }`}
                            >
                                {role}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    type='submit'
                    className="bg-yellow-400 w-full mt-6 py-3 text-lg text-gray-900 font-bold rounded-lg"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default Register;
