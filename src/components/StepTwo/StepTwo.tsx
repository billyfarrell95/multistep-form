import StepHeader from "../StepHeader/StepHeader";
import PlanSelector from "./PlanSelector";
import MonthlyYearlySelector from "./MonthlyYearlySelector";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./StepTwo.css";

interface StepTwoProps {
  setFormData: Dispatch<SetStateAction<{ stepOne: { name: string; email: string; phone: string; }; stepTwo: { plan: string; isYearly: boolean; }; stepThree: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean; }; }>>,
  formPlan: string,
  stepTwoErrors: boolean
  setStepTwoErrors: Dispatch<SetStateAction<boolean>>
}

const planDetails = {
  arcade: {
    monthly: 9,
    yearly: 90,
  },
  advanced: {
    monthly: 12,
    yearly: 120,
  },
  pro: {
    monthly: 15,
    yearly: 150,
  },
};

function StepTwo({ setFormData, formPlan, stepTwoErrors, setStepTwoErrors }: StepTwoProps) {
  const [isYearly, setIsYearly] = useState(false);

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

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData, 
      stepTwo: {
        ...prevFormData.stepTwo, 
        isYearly: isYearly,
      }
    }));
  }, [isYearly])
// @todo: handle monthly/yearly plan changes
  return (
    <div>
        <StepHeader title={"Select Your Plan"} description={"You have the option of monthly or yearly billing."} />
        {stepTwoErrors === true && (
          <p className="error-message">Please select a plan:</p>
        )}
        <div className="plan-selector-wrapper">
            <PlanSelector iconPath={"../../src/assets/images/icon-arcade.svg"} planName={"Arcade"} planPrice={isYearly ? planDetails.arcade.yearly : planDetails.arcade.monthly} handlePlanSelection={handlePlanSelection}  activePlan={formPlan} isYearly={isYearly} />
            <PlanSelector iconPath={"../../src/assets/images/icon-advanced.svg"} planName={"Advanced"} planPrice={isYearly ? planDetails.advanced.yearly : planDetails.advanced.monthly} handlePlanSelection={handlePlanSelection} activePlan={formPlan} isYearly={isYearly} />
            <PlanSelector iconPath={"../../src/assets/images/icon-pro.svg"} planName={"Pro"} planPrice={isYearly ? planDetails.pro.yearly : planDetails.pro.monthly} handlePlanSelection={handlePlanSelection} activePlan={formPlan} isYearly={isYearly} />
        </div>
        <MonthlyYearlySelector isYearly={isYearly} setIsyearly={setIsYearly} />
    </div>
  )
}

export default StepTwo;
