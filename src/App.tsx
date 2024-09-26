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
    name: "Billy Farrell",
    email: "billyfarrell95@gmail.com",
    phone: "123-123-1231",
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

  useEffect(() => {
    console.log("FORM DATA", formData)
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
                setStepTwoErrors={setStepTwoErrors}   />
            )}
            {currentStep === 3 && (
              <StepThree />
            )}
            {currentStep === 4 && (
              <StepFour setCurrentStep={setCurrentStep} />
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
