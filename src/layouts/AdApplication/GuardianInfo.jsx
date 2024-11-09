import React, { useState } from 'react';

const GuardianInfo = ({ formData, setFormData, nextStep, prevStep }) => {
    const [invalidFields, setInvalidFields] = useState({}); // Track invalid fields

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNext = () => {
        const requiredFields = ['parent_full_name', 'occupation', 'phone_number', 'email', 'parent_home_address'];
        const missingFields = {};

        requiredFields.forEach(field => {
            if (!formData[field]) {
                missingFields[field] = true;
            }
        });

        if (Object.keys(missingFields).length > 0) {
            setInvalidFields(missingFields);
            alert("Please fill out all required fields before proceeding.");
        } else {
            setInvalidFields({}); // Clear invalid fields if everything is filled
            nextStep();
        }
    };

    return (
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg border-2 border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Guardian Information</h2>
            <form>
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label htmlFor="parent_full_name" className="block text-gray-700 font-medium mb-2">
                            Parent/Guardian Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="parent_full_name" 
                            name="parent_full_name" 
                            placeholder="Enter full name of parent/guardian" 
                            value={formData.parent_full_name} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.parent_full_name ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="occupation" className="block text-gray-700 font-medium mb-2">
                            Occupation <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="occupation" 
                            name="occupation" 
                            placeholder="Enter occupation" 
                            value={formData.occupation} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.occupation ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone_number" className="block text-gray-700 font-medium mb-2">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="phone_number" 
                            name="phone_number" 
                            placeholder="Enter phone number" 
                            value={formData.phone_number} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.phone_number ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter email address" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.email ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="parent_home_address" className="block text-gray-700 font-medium mb-2">
                            Home Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="parent_home_address" 
                            name="parent_home_address" 
                            placeholder="Enter parent/guardian home address" 
                            value={formData.parent_home_address} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.parent_home_address ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <button 
                        type="button" 
                        onClick={prevStep} 
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                    >
                        Previous
                    </button>
                    <button 
                        type="button" 
                        onClick={handleNext} 
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GuardianInfo;
