import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import StepThree from './components/StepThree/StepThree';
import StepFour from './components/StepFour/StepFour';
import StepFive from './components/StepFive/StepFive';
import FormControls from './components/FormControls/FormControls';
import { useState } from 'react';

export const initialFormData = {
  stepOne: {
    name: "",
    email: "",
    phone: "",
  },
  stepTwo: {
    plan: "",
    isYearly: false,
  },
  stepThree: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  }
};

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ ...initialFormData });
  const [stepOneErrors, setStepOneErrors] = useState(false);
  const [stepTwoErrors, setStepTwoErrors] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  return (
    <>
      <div className="main-wrapper">
        <Sidebar currentStep={currentStep} />
        <div className="step-wrapper">
            {currentStep === 1 && (
              <StepOne 
                formName={formData.stepOne.name} 
                formEmail={formData.stepOne.email} 
                formPhone={formData.stepOne.phone} 
                setFormData={setFormData}
                stepOneErrors={stepOneErrors} />
            )}
            {currentStep === 2 && (
              <StepTwo 
                formPlan={formData.stepTwo.plan}
                setFormData={setFormData}
                stepTwoErrors={stepTwoErrors}
                setStepTwoErrors={setStepTwoErrors} 
                isPlanYearly={formData.stepTwo.isYearly}
                totalCost={totalCost}
                setTotalCost={setTotalCost} />
            )}
            {currentStep === 3 && (
              <StepThree 
                setFormData={setFormData}
                isOnlineServiceSelected={formData.stepThree.onlineService} 
                isLargerStorageSelected={formData.stepThree.largerStorage}
                isCustomizableProfileSelected={formData.stepThree.customizableProfile}
                isPlanYearly={formData.stepTwo.isYearly} 
                totalCost={totalCost}
                setTotalCost={setTotalCost} />
            )}
            {currentStep === 4 && (
              <StepFour 
                setCurrentStep={setCurrentStep} 
                planName={formData.stepTwo.plan}
                isOnlineServiceSelected={formData.stepThree.onlineService} 
                isLargerStorageSelected={formData.stepThree.largerStorage}
                isCustomizableProfileSelected={formData.stepThree.customizableProfile}
                isPlanYearly={formData.stepTwo.isYearly} />
            )}
            {currentStep === 5 && (
              <StepFive />
            )}
          <FormControls 
            currentStep={currentStep} 
            setCurrentStep={setCurrentStep}
            formData={formData}
            setStepOneErrors={setStepOneErrors}
            setStepTwoErrors={setStepTwoErrors} />
        </div>
      </div>
    </>
  )
}

export default App
