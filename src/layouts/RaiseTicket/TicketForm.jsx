import React, { useState } from 'react';
import { submitTicket } from "../../Services/TicketService"; // Adjust the import path accordingly

const TicketForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone_number: '',
        section: 'authentication',
        severity: 'low',
        description: '',
        screenshot: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            screenshot: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitTicket(formData);
            alert('Ticket submitted successfully!');
        } catch (error) {
            console.error('Error submitting ticket:', error);
            alert('Failed to submit ticket. Please try again later.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border-1 border-gray-200 flex flex-col md:flex-row mt-16 md:mt-24">
            <div className="md:w-1/2 pr-8 mb-8 md:mb-0 flex items-center">
                <img 
                    src='https://images.pexels.com/photos/5453859/pexels-photo-5453859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt="Support" 
                    className="rounded-lg shadow-lg w-full object-cover h-full"
                />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Report an Issue</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="fullName">
                            <i className="fas fa-user mr-2"></i> Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="full_name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full name"
                            value={formData.full_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                            <i className="fas fa-envelope mr-2"></i> Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                            <i className="fas fa-phone mr-2"></i> Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone_number"
                            name="phone_number"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="section">
                            <i className="fas fa-sitemap mr-2"></i> Section of the Website
                        </label>
                        <select
                            id="section"
                            name="section"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.section}
                            onChange={handleChange}
                            required
                        >
                            <option value="authentication">Authentication</option>
                            <option value="reservation">Reservation Booking</option>
                            <option value="admissions">Admissions</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="severity">
                            <i className="fas fa-exclamation-triangle mr-2"></i> Severity Level
                        </label>
                        <select
                            id="severity"
                            name="severity"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.severity}
                            onChange={handleChange}
                            required
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="critical">Critical</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
                            <i className="fas fa-pencil-alt mr-2"></i> Describe the Error
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Describe the issue you are facing"
                            value={formData.description}
                            onChange={handleChange}
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="screenshot">
                            <i className="fas fa-camera mr-2"></i> Attach Screenshot or Photo
                        </label>
                        <input
                            type="file"
                            id="screenshot"
                            name="screenshot"
                            accept="image/*"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                        >
                            Submit Ticket
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TicketForm;
