import React, { useState } from "react";
import moment from "moment";
import { DatePickerWithPresets } from "./DatePickerWithPresets";
import { postReservation } from "../../Services/ReservationService";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const Reservation = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    const selectedMoment = moment(selectedTime, 'HH:mm');
    if (selectedMoment.isBefore(moment('09:00', 'HH:mm')) || selectedMoment.isAfter(moment('16:00', 'HH:mm'))) {
      setError('Please select a time between 9:00 AM and 4:00 PM.');
      setSelectedTime(''); // Clear the time state if invalid
    } else {
      setError('');
      setSelectedTime(selectedTime);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !department || !selectedDate || !selectedTime) {
      setError('Please fill out all required fields.');
      return;
    }

    try {
      const reservationData = {
        full_name: fullName,
        email,
        phone,
        department,
        booking_date: selectedDate,
        booking_time: selectedTime,
        message,
      };

      await postReservation(reservationData);
      setIsAlertOpen(true);
      setError(null); // Clear any previous errors

      // Clear the form after successful submission
      setFullName('');
      setEmail('');
      setPhone('');
      setDepartment('');
      
      setSelectedTime('');
      setMessage('');
    } catch (error) {
      console.error("Error submitting reservation:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error); // Set error from backend
      } else {
        setError("Server error. Please try again later."); // Fallback error
      }
    }
  };

  return (
    <section id="book-a-table" className="book-a-table section py-12 bg-gray-50">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Book A Meeting</h2>
        <p className="text-lg text-gray-600">
          <span>Complete the form to book an Appointment With Us</span>
        </p>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url(https://images.pexels.com/photos/8471787/pexels-photo-8471787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>
            {/* Image Background */}
          </div>
          
          <div className="w-full lg:w-1/2 p-8 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit}>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Your Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="department" className="block text-gray-700 font-medium mb-2">Select Department</label>
                  <select
                    name="department"
                    id="department"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  >
                    <option value="">Select a department</option>
                    <option value="Finance Department">Finance Department</option>
                    <option value="Admissions Department">Admissions Department</option>
                    <option value="Student Affairs">Student Affairs</option>
                    <option value="Human Resource Department">Human Resource Department</option>
                    <option value="Academics Department">Academics Department</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Select Date</label>
                  <DatePickerWithPresets
                    onChange={setSelectedDate}
                    onError={setError}
                    required // Ensure that the DatePicker component supports this prop or validate within the component
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Select Time</label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter any additional information"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit Reservation
              </button>
            </form>
          </div>
        </div>
      </div>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reservation Confirmed</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            Your reservation has been successfully submitted!
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setIsAlertOpen(false)}
              className="bg-indigo-600 text-white rounded-lg px-4 py-2"
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default Reservation;
