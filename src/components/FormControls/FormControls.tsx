import "./FormControls.css";
import { SetStateAction, Dispatch } from "react";
import { validateEmail } from "../../utils/utils";

interface StepIndicatorProps {
  currentStep: number,
  setCurrentStep: Dispatch<SetStateAction<number>>,
  formData: { stepOne: { name: string; email: string; phone: string; }; stepTwo: { plan: string; isYearly: boolean; }; stepThree: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean; }; },
  setStepOneErrors: Dispatch<SetStateAction<boolean>>;
  setStepTwoErrors: Dispatch<SetStateAction<boolean>>;
}

function FormControls({ currentStep, setCurrentStep, formData, setStepOneErrors, setStepTwoErrors }: StepIndicatorProps) {
    const handleNextStep = () => {
      switch (currentStep) {
        case 1:
          if (formData.stepOne.name && formData.stepOne.email && formData.stepOne.phone && validateEmail(formData.stepOne.email)) {
            setCurrentStep(currentStep + 1);
          } else {
            setStepOneErrors(true);
          }
          break;
        case 2:
          if (formData.stepTwo.plan) {
            setCurrentStep(currentStep + 1);
          } else {
            setStepTwoErrors(true);
          }
          break;
          
        default:
          setCurrentStep(currentStep + 1);
          break;
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
  