import "./Sidebar.css";
import StepIndicator from "./StepIndicator";

interface SidebarProps {
  currentStep: number,
}

function Sidebar({ currentStep }: SidebarProps) {

  return (
    <div className="sidebar">
        <div className="step-indicators-wrapper">
            <StepIndicator stepNumber={"1"} stepName="Step 1" stepDescription="Your Info" currentStep={currentStep} />
            <StepIndicator stepNumber={"2"} stepName="Step 2" stepDescription="Select Plan" currentStep={currentStep} />
            <StepIndicator stepNumber={"3"} stepName="Step 3" stepDescription="Add-Ons" currentStep={currentStep} />
            <StepIndicator stepNumber={"4"} stepName="Step 4" stepDescription="Summary" currentStep={currentStep} />
        </div>
    </div>
  )
}

export default Sidebar;
