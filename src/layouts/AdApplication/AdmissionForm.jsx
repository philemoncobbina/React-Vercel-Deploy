import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import PersonalInfo from './PersonalInfo';
import GuardianInfo from './GuardianInfo';
import EduHistory from './EduHistory';
import HealthInfo from './HealthInfo';
import admissionService from "../../Services/admissionService";

const AdmissionForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        first_name: '', last_name: '', middle_name: '', home_address: '', age: '',
        language_spoken: '', country_of_citizenship: '', gender: '', date_of_birth: '',
        parent_full_name: '', occupation: '', phone_number: '', email: '', parent_home_address: '',
        previous_school_name: '', previous_class: '', previous_school_address: '', start_date: '', end_date: '',
        emergency_contact: '', emergency_contact_number: '', medical_conditions: '', allergies: '',
        disabilities: '', vaccinated: ''
    });
    const [successMessage, setSuccessMessage] = useState(''); // State for success message
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const navigate = useNavigate(); // Initialize useNavigate for redirecting

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            await admissionService.submitForm(formData);
            setSuccessMessage('Form submitted successfully!');
            setTimeout(() => {
                setSuccessMessage('');
                setFormData({ // Clear the form data
                    first_name: '', last_name: '', middle_name: '', home_address: '', age: '',
                    language_spoken: '', country_of_citizenship: '', gender: '', date_of_birth: '',
                    parent_full_name: '', occupation: '', phone_number: '', email: '', parent_home_address: '',
                    previous_school_name: '', previous_class: '', previous_school_address: '', start_date: '', end_date: '',
                    emergency_contact: '', emergency_contact_number: '', medical_conditions: '', allergies: '',
                    disabilities: '', vaccinated: ''
                });
                navigate('/dashboard'); // Redirect to /dashboard
            }, 3000); // Delay the redirect for 3 seconds to show the success message
        } catch (error) {
            setErrorMessage('Failed to submit the form. Please try again.');
            setTimeout(() => setErrorMessage(''), 3000); // Hide error message after 3 seconds
            console.error('Failed to submit the form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg">
            {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                    <span className="block sm:inline">{successMessage}</span>
                </div>
            )}
            {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                    <span className="block sm:inline">{errorMessage}</span>
                </div>
            )}
            {step === 1 && <PersonalInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />}
            {step === 2 && <GuardianInfo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
            {step === 3 && <EduHistory formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
            {step === 4 && <HealthInfo formData={formData} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit} />}
        </form>
    );
};

export default AdmissionForm;
