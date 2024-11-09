import React, { useState } from 'react';

const HealthInfo = ({ formData, setFormData, prevStep, handleSubmit }) => {
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: e.target.value.trim() === '' });
    };

    const validateAndSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        const newErrors = {
            emergency_contact: formData.emergency_contact.trim() === '',
            emergency_contact_number: formData.emergency_contact_number.trim() === '',
            medical_conditions: formData.medical_conditions.trim() === '',
            allergies: formData.allergies.trim() === '',
            disabilities: formData.disabilities.trim() === '',
            vaccinated: formData.vaccinated.trim() === '',
        };

        const isValid = !Object.values(newErrors).includes(true);

        setErrors(newErrors);

        if (isValid) {
            handleSubmit(e); // Call the provided handleSubmit function if validation passes
        } else {
            alert('Please fill in all required fields.'); // Display an alert if validation fails
        }
    };

    const inputClassName = (field) => `
        w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
        ${errors[field] ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}
    `;

    return (
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg border-2 border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Health Information</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="emergency_contact" className="block text-gray-700 font-medium mb-2">
                        Emergency Contact <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="emergency_contact" 
                        name="emergency_contact" 
                        placeholder="Enter emergency contact name" 
                        value={formData.emergency_contact} 
                        onChange={handleChange} 
                        className={inputClassName('emergency_contact')} 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="emergency_contact_number" className="block text-gray-700 font-medium mb-2">
                        Emergency Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="emergency_contact_number" 
                        name="emergency_contact_number" 
                        placeholder="Enter emergency contact number" 
                        value={formData.emergency_contact_number} 
                        onChange={handleChange} 
                        className={inputClassName('emergency_contact_number')} 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="medical_conditions" className="block text-gray-700 font-medium mb-2">
                        Medical Conditions <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="medical_conditions" 
                        name="medical_conditions" 
                        placeholder="Enter any medical conditions" 
                        value={formData.medical_conditions} 
                        onChange={handleChange} 
                        className={inputClassName('medical_conditions')} 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="allergies" className="block text-gray-700 font-medium mb-2">
                        Allergies <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="allergies" 
                        name="allergies" 
                        placeholder="Enter any allergies" 
                        value={formData.allergies} 
                        onChange={handleChange} 
                        className={inputClassName('allergies')} 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="disabilities" className="block text-gray-700 font-medium mb-2">
                        Disabilities <span className="text-red-500">*</span>
                    </label>
                    <select 
                        id="disabilities" 
                        name="disabilities" 
                        value={formData.disabilities} 
                        onChange={handleChange} 
                        className={inputClassName('disabilities')} 
                        required
                    >
                        <option value="" disabled>Select Disabilities</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="vaccinated" className="block text-gray-700 font-medium mb-2">
                        Vaccination Status <span className="text-red-500">*</span>
                    </label>
                    <select 
                        id="vaccinated" 
                        name="vaccinated" 
                        value={formData.vaccinated} 
                        onChange={handleChange} 
                        className={inputClassName('vaccinated')} 
                        required
                    >
                        <option value="" disabled>Select Vaccination Status</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
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
                        type="submit" 
                        onClick={validateAndSubmit} 
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HealthInfo;
