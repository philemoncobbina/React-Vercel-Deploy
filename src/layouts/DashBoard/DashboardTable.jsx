// DashboardTable.js
import React, { useState, useEffect, useRef } from 'react';
import { FaEllipsisH, FaEdit, FaTrashAlt, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import admissionService from '../../Services/admissionService';
import ConfirmationModal from './ConfirmationModal';
import { format } from 'date-fns';

const DashboardTable = () => {
  const [admissions, setAdmissions] = useState([]);
  const [filteredAdmissions, setFilteredAdmissions] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const fetchAdmissionsData = async () => {
    try {
      setIsLoading(true);
      const data = await admissionService.fetchAdmissions();
      setAdmissions(data);
      setFilteredAdmissions(data);
    } catch (error) {
      console.error('Error fetching admissions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmissionsData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredAdmissions(
        admissions.filter((admission) =>
          `${admission.first_name} ${admission.last_name}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredAdmissions(admissions);
    }
  }, [searchTerm, admissions]);

  const handleToggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleEditAdmission = (admission) => {
    navigate(`/admission/edit/${admission.id}`);
  };

  const openDeleteModal = (admission) => {
    setSelectedAdmission(admission);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setSelectedAdmission(null);
  };

  const handleDeleteAdmission = async () => {
    if (selectedAdmission) {
      try {
        await admissionService.deleteAdmission(selectedAdmission.id);
        setAdmissions((prevAdmissions) =>
          prevAdmissions.filter((admission) => admission.id !== selectedAdmission.id)
        );
        setFilteredAdmissions((prevFiltered) =>
          prevFiltered.filter((admission) => admission.id !== selectedAdmission.id)
        );
      } catch (error) {
        console.error('Error deleting admission:', error);
      } finally {
        closeDeleteModal();
      }
    }
  };

  const formatLastLogin = (dateString) => {
    if (!dateString) {
        return '';  // Return an empty string when there is no date
    }
    return format(new Date(dateString), 'MMMM d, yyyy, h:mm a');
};


  return (
    <div  className="container max-w-7xl mt-8 sm:mt-5">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">Your Admissions</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search admissions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 pl-10 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-lg font-medium text-gray-700">Loading...</div>
          </div>
        ) : filteredAdmissions.length === 0 ? (
          <div className="text-center text-gray-600 py-12">No admissions found.</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                <th className="px-6 py-3 text-left">Admission ID</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Applicant Name</th>
                <th className="px-6 py-3 text-left">Actions</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200">
              {filteredAdmissions.map((admission, index) => (
                <tr
                  key={admission.id}
                  className="hover:bg-gray-50 transition duration-150 ease-in-out"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {admission.admission_number}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
  {formatLastLogin(admission.submit_date)}
</td>

                  <td className="px-6 py-4 text-gray-600">
                    {`${admission.first_name} ${admission.last_name}`}
                  </td>
                  <td className="px-9 py-4 text-gray-600">
                    <button
                      onClick={() => handleToggleDropdown(index)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaEllipsisH />
                    </button>
                    {openDropdown === index && (
                      <div
                        ref={dropdownRef}
                        className="absolute bg-white shadow-lg border border-gray-200 rounded-lg text-left z-10 mt-2 p-2"
                      >
                        <button
                          onClick={() => handleEditAdmission(admission)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-40 rounded-md transition duration-150 ease-in-out"
                        >
                          <FaEdit className="mr-2" /> Edit
                        </button>
                        <button
                          onClick={() => openDeleteModal(admission)}
                          className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-200 w-40 rounded-md transition duration-150 ease-in-out"
                        >
                          <FaTrashAlt className="mr-2" /> Delete
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 inline-block text-xs rounded-full font-semibold bg-green-500 text-white">
                      {admission.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDeleteAdmission}
        admissionNumber={selectedAdmission?.admission_number}
      />
    </div>
  );
};

export default DashboardTable;
