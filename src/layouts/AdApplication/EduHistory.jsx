import React, { useState } from 'react';

const EduHistory = ({ formData, setFormData, nextStep, prevStep }) => {
    const [invalidFields, setInvalidFields] = useState({}); // Track invalid fields

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNext = () => {
        const { previous_school_name, previous_class, previous_school_address, start_date, end_date } = formData;
        const requiredFields = { previous_school_name, previous_class, previous_school_address, start_date, end_date };
        const missingFields = {};

        Object.keys(requiredFields).forEach(field => {
            if (!requiredFields[field]) {
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Education History</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="previous_school_name" className="block text-gray-700 font-medium mb-2">
                        Previous School Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="previous_school_name" 
                        name="previous_school_name" 
                        placeholder="Enter name of previous school" 
                        value={formData.previous_school_name} 
                        onChange={handleChange} 
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.previous_school_name ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="previous_class" className="block text-gray-700 font-medium mb-2">
                        Previous Class <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="previous_class" 
                        name="previous_class" 
                        placeholder="Enter previous class" 
                        value={formData.previous_class} 
                        onChange={handleChange} 
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.previous_class ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="previous_school_address" className="block text-gray-700 font-medium mb-2">
                        Previous School Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="previous_school_address" 
                        name="previous_school_address" 
                        placeholder="Enter address of previous school" 
                        value={formData.previous_school_address} 
                        onChange={handleChange} 
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.previous_school_address ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="start_date" className="block text-gray-700 font-medium mb-2">
                        Start Date <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="date" 
                        id="start_date" 
                        name="start_date" 
                        value={formData.start_date} 
                        onChange={handleChange} 
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.start_date ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="end_date" className="block text-gray-700 font-medium mb-2">
                        End Date <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="date" 
                        id="end_date" 
                        name="end_date" 
                        value={formData.end_date} 
                        onChange={handleChange} 
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.end_date ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                        required
                    />
                </div>
                <div className="flex justify-between mt-4">
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

export default EduHistory;
