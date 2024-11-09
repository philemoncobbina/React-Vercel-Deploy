import React, { useState } from 'react';
import { requestVerificationCode, verifyResetCode, resetPassword } from '../../Services/PasswordService';
import Alert from './Alert';

const PasswordReset = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await requestVerificationCode(email);
            setStep(2);
        } catch (err) {
            setError(err.response?.data?.error || 'Server error');
        } finally {
            setLoading(false);
        }
    };

    const handleCodeSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await verifyResetCode(email, verificationCode);
            setStep(3);
        } catch (err) {
            setError(err.response?.data?.error || 'Server error');
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (newPassword.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return;
        }
        setLoading(true);
        try {
            await resetPassword(email, verificationCode, newPassword);
            setSuccessMessage('Password reset successful!');
            setStep(1);
            setEmail('');
            setVerificationCode('');
            setNewPassword('');
        } catch (err) {
            setError(err.response?.data?.error || 'Server error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                {error && (
                    <Alert
                        message={error}
                        type="error"
                        onClose={() => setError('')}
                    />
                )}
                {successMessage && (
                    <Alert
                        message={successMessage}
                        type="success"
                        onClose={() => setSuccessMessage('')}
                    />
                )}
                {step === 1 && (
                    <form onSubmit={handleEmailSubmit}>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Verification Code'}
                        </button>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleCodeSubmit}>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Verification Code</label>
                        <input
                            type="text"
                            placeholder="Enter verification code"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            disabled={loading}
                        >
                            {loading ? 'Verifying...' : 'Verify Code'}
                        </button>
                    </form>
                )}
                {step === 3 && (
                    <form onSubmit={handlePasswordSubmit}>
                        <label className="block mb-2 text-sm font-medium text-gray-700">New Password</label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => {
                                setNewPassword(e.target.value);
                                if (e.target.value.length < 8) {
                                    setPasswordError('Password must be at least 8 characters long');
                                } else {
                                    setPasswordError('');
                                }
                            }}
                            className={`border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline ${passwordError ? 'border-red-500' : ''}`}
                            required
                        />
                        {passwordError && <div className="text-red-500 mb-4">{passwordError}</div>}
                        <button
                            type="submit"
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${passwordError ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading || passwordError}
                        >
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PasswordReset;
