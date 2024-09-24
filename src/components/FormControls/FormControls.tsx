import "./FormControls.css";
import { SetStateAction, Dispatch } from "react";

interface StepIndicatorProps {
  currentStep: number,
  setCurrentStep: Dispatch<SetStateAction<number>>,
}
function FormControls({ currentStep, setCurrentStep }: StepIndicatorProps) {
    const handleNextStep = () => {
      setCurrentStep(currentStep + 1)
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
  