import React from 'react';

const StepperNavigation = ({ steps, currentStep }) => {
    return (
        <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => (
                <div key={index} className="flex-1">
                    <div className={`w-full h-1 mb-2 ${index <= currentStep - 1 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                    <div className="flex justify-center">
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${index <= currentStep - 1 ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-400'}`}>
                            {index + 1}
                        </div>
                    </div>
                    <div className="text-center text-sm mt-2 text-gray-600">
                        {step}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StepperNavigation;
