import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import StepThree from './components/StepThree/StepThree';
import StepFour from './components/StepFour/StepFour';
import StepFive from './components/StepFive/StepFive';
import FormControls from './components/FormControls/FormControls';
import { useEffect, useState } from 'react';

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

export const planDetails = {
  arcade: {
    monthly: 9,
    yearly: 90,
  },
  advanced: {
    monthly: 12,
    yearly: 120,
  },
  pro: {
    monthly: 15,
    yearly: 150,
  },
};

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ ...initialFormData });
  const [stepOneErrors, setStepOneErrors] = useState(false);
  const [stepTwoErrors, setStepTwoErrors] = useState(false);

  useEffect(() => {
    console.log("FORM DATA", formData.stepTwo.isYearly)
  }, [formData])
  
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
                isPlanYearly={formData.stepTwo.isYearly} />
            )}
            {currentStep === 3 && (
              <StepThree 
                setFormData={setFormData}
                onlineService={formData.stepThree.onlineService} 
                largerStorage={formData.stepThree.largerStorage}
                customizableProfile={formData.stepThree.customizableProfile} />
            )}
            {currentStep === 4 && (
              <StepFour 
              setCurrentStep={setCurrentStep} />
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
