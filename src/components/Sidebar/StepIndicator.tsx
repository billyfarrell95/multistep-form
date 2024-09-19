interface StepIndicatorProps {
    stepNumber: string,
    stepName: string,
    stepDescription: string,
}

function StepIndicator({ stepNumber, stepName, stepDescription }: StepIndicatorProps) {

  return (
    <div className="step-indicator">
        <div className="step-indicator__num">{stepNumber}</div>
        <div className="step-indicator__description">
            <div className="step-indicator__step">{stepName}</div>
            <div className="step-indicator__step-name">{stepDescription}</div>
        </div>
    </div>
  )
}

export default StepIndicator;
