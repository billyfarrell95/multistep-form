import StepHeader from "../StepHeader/StepHeader";
import PlanSelector from "./PlanSelector";
import MonthlyYearlySelector from "./MonthlyYearlySelector";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { planDetails } from "../../data/FormData";
import "./StepTwo.css";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advacedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";

interface StepTwoProps {
  setFormData: Dispatch<SetStateAction<{ stepOne: { name: string; email: string; phone: string; }; stepTwo: { plan: string; isYearly: boolean; }; stepThree: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean; }; }>>,
  formPlan: string,
  stepTwoErrors: boolean
  setStepTwoErrors: Dispatch<SetStateAction<boolean>>,
  isPlanYearly: boolean,
  totalCost: number,
  setTotalCost: Dispatch<SetStateAction<number>>,
}

function StepTwo({ setFormData, formPlan, stepTwoErrors, setStepTwoErrors, isPlanYearly }: StepTwoProps) {
  const [isYearly, setIsYearly] = useState(isPlanYearly);

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

  return (
    <div>
        <StepHeader title={"Select Your Plan"} description={"You have the option of monthly or yearly billing."} />
        {stepTwoErrors === true && (
          <p className="error-message">Please select a plan:</p>
        )}
        <div className="plan-selector-wrapper">
            <PlanSelector iconPath={arcadeIcon} planName={"Arcade"} planPrice={isYearly ? planDetails.arcade.yearly : planDetails.arcade.monthly} handlePlanSelection={handlePlanSelection}  activePlan={formPlan} isYearly={isYearly} />
            <PlanSelector iconPath={advacedIcon} planName={"Advanced"} planPrice={isYearly ? planDetails.advanced.yearly : planDetails.advanced.monthly} handlePlanSelection={handlePlanSelection} activePlan={formPlan} isYearly={isYearly} />
            <PlanSelector iconPath={proIcon} planName={"Pro"} planPrice={isYearly ? planDetails.pro.yearly : planDetails.pro.monthly} handlePlanSelection={handlePlanSelection} activePlan={formPlan} isYearly={isYearly} />
        </div>
        <MonthlyYearlySelector isYearly={isYearly} setIsyearly={setIsYearly} />
    </div>
  )
}

export default StepTwo;
