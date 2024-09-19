import "./Sidebar.css";
import StepIndicator from "./StepIndicator";

function Sidebar() {

  return (
    <div className="sidebar">
        <div className="step-indicators-wrapper">
            <StepIndicator stepNumber={"1"} stepName="Step 1" stepDescription="Your Info" />
            <StepIndicator stepNumber={"2"} stepName="Step 2" stepDescription="Select Plan" />
            <StepIndicator stepNumber={"3"} stepName="Step 3" stepDescription="Add-Ons" />
            <StepIndicator stepNumber={"4"} stepName="Step 4" stepDescription="Summary" />
        </div>
    </div>
  )
}

export default Sidebar;
