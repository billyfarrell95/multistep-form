import { useState, useEffect } from "react";

interface StepIndicatorProps {
    stepNumber: string,
    stepName: string,
    stepDescription: string,
    currentStep: number,
}

function StepIndicator({ stepNumber, stepName, stepDescription, currentStep }: StepIndicatorProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (currentStep === 5 && (stepNumber === "4" || stepNumber==="5")) {
      setIsActive(true);
    } else {
      setIsActive(currentStep.toString() === stepNumber);
    }
  }, [currentStep, stepNumber]);
  return (
    <>
     <div className="step-indicator">
          <div className={`step-indicator__num ${isActive && 'active'}`}>
              {stepNumber}
          </div>
          <div className="step-indicator__description">
              <div className="step-indicator__step">{stepName}</div>
              <div className="step-indicator__step-name">{stepDescription}</div>
          </div>
      </div>
    </>
  )
}

export default StepIndicator;
