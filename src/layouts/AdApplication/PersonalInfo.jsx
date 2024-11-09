import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
    const [error, setError] = useState('');
    const [countries, setCountries] = useState([]);
    const [invalidFields, setInvalidFields] = useState({}); // Track invalid fields

    useEffect(() => {
        // Fetch country names from REST API
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                const countryNames = response.data.map(country => country.name.common);
                setCountries(countryNames.sort());
            })
            .catch(error => {
                console.error("Error fetching countries:", error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'date_of_birth') {
            const selectedDate = new Date(value);
            const today = new Date();

            if (selectedDate > today) {
                setError('Date of birth cannot be in the future.');
                setFormData({ ...formData, date_of_birth: '', age: '' });
            } else {
                setError('');
                let age = today.getFullYear() - selectedDate.getFullYear();
                const monthDifference = today.getMonth() - selectedDate.getMonth();

                // Adjust age if the birthday hasn't occurred yet this year
                if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < selectedDate.getDate())) {
                    age--;
                }

                setFormData({ ...formData, date_of_birth: value, age: age });
            }
        }
    };

    const handleNext = () => {
    const requiredFields = ['first_name', 'last_name', 'home_address', 'age', 'language_spoken', 'country_of_citizenship', 'gender', 'date_of_birth'];
    const missingFields = {};

    requiredFields.forEach(field => {
        if (!formData[field]) {
            missingFields[field] = true;
        }
    });

    if (!formData.middle_name) {
        setFormData(prevFormData => ({ ...prevFormData, middle_name: "N/A" }));
    }

    if (Object.keys(missingFields).length > 0) {
        setInvalidFields(missingFields);
        alert("Please fill out all required fields before proceeding.");
    } else {
        setInvalidFields({});
        nextStep();
    }
};


    return (
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg border-2 border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Personal Information</h2>
            <form>
                <div className="grid grid-cols-1 gap-6">
                    
                    <div>
                        <label htmlFor="first_name" className="block text-gray-700 font-medium mb-2">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="first_name" 
                            name="first_name" 
                            placeholder="Enter your first name" 
                            value={formData.first_name} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.first_name ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block text-gray-700 font-medium mb-2">
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="last_name" 
                            name="last_name" 
                            placeholder="Enter your last name" 
                            value={formData.last_name} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.last_name ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="middle_name" className="block text-gray-700 font-medium mb-2">
                            Middle Name
                        </label>
                        <input 
                            type="text" 
                            id="middle_name" 
                            name="middle_name" 
                            placeholder="Enter your middle name (optional)" 
                            value={formData.middle_name} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label htmlFor="date_of_birth" className="block text-gray-700 font-medium mb-2">
                            Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="date" 
                            id="date_of_birth" 
                            name="date_of_birth" 
                            placeholder="Select your date of birth" 
                            value={formData.date_of_birth || ''} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.date_of_birth ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        />
                        {error && <span className="text-red-500 text-sm">{error}</span>}
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
                            Age (Age will be calculated based on your date of birth) <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="number" 
                            id="age" 
                            name="age" 
                            placeholder="Enter your age" 
                            value={formData.age} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.age ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required 
                            disabled
                        />
                    </div>
                    <div>
                        <label htmlFor="home_address" className="block text-gray-700 font-medium mb-2">
                            Home Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="home_address" 
                            name="home_address" 
                            placeholder="Enter your home address" 
                            value={formData.home_address} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.home_address ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="language_spoken" className="block text-gray-700 font-medium mb-2">
                            Language Spoken <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="language_spoken" 
                            name="language_spoken" 
                            placeholder="Enter the language(s) you speak" 
                            value={formData.language_spoken} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.language_spoken ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="country_of_citizenship" className="block text-gray-700 font-medium mb-2">
                            Country of Citizenship <span className="text-red-500">*</span>
                        </label>
                        <select 
                            id="country_of_citizenship" 
                            name="country_of_citizenship" 
                            value={formData.country_of_citizenship} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.country_of_citizenship ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        >
                            <option value="">Select your country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
                            Gender <span className="text-red-500">*</span>
                        </label>
                        <select 
                            id="gender" 
                            name="gender" 
                            value={formData.gender} 
                            onChange={handleChange} 
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${invalidFields.gender ? 'border-red-500' : 'border-gray-300'} focus:border-transparent`} 
                            required
                        >
                            <option value="">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        type="button"
                        onClick={() => console.log('Previous Step')} // Replace with actual previous step logic
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                    >
                        Back
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInfo;
