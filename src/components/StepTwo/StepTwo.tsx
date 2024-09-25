import StepHeader from "../StepHeader/StepHeader";
import PlanSelector from "./PlanSelector";
import MonthlyYearlySelector from "./MonthlyYearlySelector";
import { Dispatch, SetStateAction, useState } from "react";
import "./StepTwo.css";

interface StepTwoProps {
  setFormData: Dispatch<SetStateAction<{ stepOne: { name: string; email: string; phone: string; }; stepTwo: { plan: string; monthly: boolean; yearly: boolean; }; stepThree: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean; }; }>>,
  formPlan: string,
  stepTwoErrors: boolean
  setStepTwoErrors: Dispatch<SetStateAction<boolean>>
}

function StepTwo({ setFormData, formPlan, stepTwoErrors, setStepTwoErrors }: StepTwoProps) {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlanSelection = (planSelection: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData, 
      stepTwo: {
        ...prevFormData.stepTwo, 
        plan: planSelection,
      }
    }));
    setStepTwoErrors(false)
  }
// @todo: handle monthly/yearly plan changes
  return (
    <div>
        <StepHeader title={"Select Your Plan"} description={"You have the option of monthly or yearly billing."} />
        {stepTwoErrors === true && (
          <p className="error-message">Please select a plan:</p>
        )}
        <div className="plan-selector-wrapper">
            <PlanSelector iconPath={"../../src/assets/images/icon-arcade.svg"} planName={"Arcade"} planPrice={9} handlePlanSelection={handlePlanSelection}  activePlan={formPlan} />
            <PlanSelector iconPath={"../../src/assets/images/icon-advanced.svg"} planName={"Advanced"} planPrice={12} handlePlanSelection={handlePlanSelection} activePlan={formPlan}  />
            <PlanSelector iconPath={"../../src/assets/images/icon-pro.svg"} planName={"Pro"} planPrice={15} handlePlanSelection={handlePlanSelection} activePlan={formPlan}  />
        </div>
        <MonthlyYearlySelector isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
    </div>
  )
}

export default StepTwo;
