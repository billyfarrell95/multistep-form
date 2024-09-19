import StepHeader from "../StepHeader/StepHeader";
import PlanSelector from "./PlanSelector";
import "./StepTwo.css";

function StepTwo() {

  return (
    <div>
        <StepHeader title={"Select Your Plan"} description={"You have the option of monthly or yearly billing."} />
        <div className="plan-selector-wrapper">
            <PlanSelector iconPath={"../../src/assets/images/icon-arcade.svg"} planName={"Arcade"} planPrice={9}  />
            <PlanSelector iconPath={"../../src/assets/images/icon-advanced.svg"} planName={"Advanced"} planPrice={12}  />
            <PlanSelector iconPath={"../../src/assets/images/icon-pro.svg"} planName={"Pro"} planPrice={15}  />
        </div>
    </div>
  )
}

export default StepTwo;
