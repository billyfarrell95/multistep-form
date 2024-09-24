import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import StepThree from './components/StepThree/StepThree';
import StepFour from './components/StepFour/StepFour';
import StepFive from './components/StepFive/StepFIve';
import FormControls from './components/FormControls/FormControls';
import { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <>
      <div className="main-wrapper">
        <Sidebar currentStep={currentStep} />
        <div className="step-wrapper">
            {currentStep === 1 && (
              <StepOne />
            )}
            {currentStep === 2 && (
              <StepTwo />
            )}
            {currentStep === 3 && (
              <StepThree />
            )}
            {currentStep === 4 && (
              <StepFour />
            )}
            {currentStep === 5 && (
              <StepFive />
            )}
          <FormControls currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
      </div>
    </>
  )
}

export default App
