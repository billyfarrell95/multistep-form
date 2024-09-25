import "./FormControls.css";
import { SetStateAction, Dispatch } from "react";

interface StepIndicatorProps {
  currentStep: number,
  setCurrentStep: Dispatch<SetStateAction<number>>,
  formData: { stepOne: { name: string; email: string; phone: string; }; stepTwo: { plan: string; monthly: boolean; yearly: boolean; }; stepThree: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean; }; },
  setStepOneErrors: Dispatch<SetStateAction<boolean>>;
  setStepTwoErrors: Dispatch<SetStateAction<boolean>>;
}

function FormControls({ currentStep, setCurrentStep, formData, setStepOneErrors, setStepTwoErrors }: StepIndicatorProps) {
    const handleNextStep = () => {
      if (currentStep === 1) {
        if (formData.stepOne.name && formData.stepOne.email && formData.stepOne.phone) {
          setCurrentStep(currentStep + 1)
        } else {
          setStepOneErrors(true)
        }
      }
      if (currentStep === 2) {
        console.log("two")
        if (formData.stepTwo.plan) {
          setCurrentStep(currentStep + 1);
        } else {
          setStepTwoErrors(true)
        }
      }
    }
    
    const handlePreviousStep = () => {
      setCurrentStep(currentStep - 1)
    }

    const handleConfirm = () => {
      setCurrentStep(5)
    }
    return (
      <>
        {currentStep !== 5 && (
          <div className="form-controls">
            {currentStep !== 1 && (
              <button className="form-controls__back" onClick={handlePreviousStep}>Go Back</button>
            )}
            {currentStep !== 4 ? (
              <button className="form-controls__next btn-fill" onClick={handleNextStep}>Next Step</button>
            ) : (
              <button className="form-controls__confirm btn-fill" onClick={handleConfirm}>Confirm</button>
            )}
          </div>
        )}
      </>
    )
  }
  
  export default FormControls;
  