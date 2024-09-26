import "./StepFour.css";
import StepHeader from "../StepHeader/StepHeader";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { planDetails, addonDetails } from "../../data/FormData";

interface StepFourProps {
    setCurrentStep: Dispatch<SetStateAction<number>>,
    planName: string,
    isOnlineServiceSelected: boolean,
    isLargerStorageSelected: boolean,
    isCustomizableProfileSelected: boolean,
    isPlanYearly: boolean,
}

function StepFour({ setCurrentStep, planName, isOnlineServiceSelected, isLargerStorageSelected, isCustomizableProfileSelected, isPlanYearly }: StepFourProps) {

    const handleChangePlan = () => {
        setCurrentStep(2);
    }

    const [planCost, setPlanCost] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        let newPlanCost = 0;
    
        switch (planName.toLowerCase()) {
            case 'arcade':
                newPlanCost = isPlanYearly ? planDetails.arcade.yearly : planDetails.arcade.monthly;
                break;
            case 'advanced':
                newPlanCost = isPlanYearly ? planDetails.advanced.yearly : planDetails.advanced.monthly;
                break;
            case 'pro':
                newPlanCost = isPlanYearly ? planDetails.pro.yearly : planDetails.pro.monthly;
                break;
            default:
                return;
        }
    
        setPlanCost(newPlanCost);
    }, [planName, isPlanYearly]);
    
    useEffect(() => {
        let total = planCost;

        if (isPlanYearly) {
            if (isOnlineServiceSelected) total += addonDetails.online.yearly;
            if (isLargerStorageSelected) total += addonDetails.storage.yearly;
            if (isCustomizableProfileSelected) total += addonDetails.profile.yearly;
        } else {
            if (isOnlineServiceSelected) total += addonDetails.online.monthly;
            if (isLargerStorageSelected) total += addonDetails.storage.monthly;
            if (isCustomizableProfileSelected) total += addonDetails.profile.monthly;
        }

        setTotalCost(total);
    }, [planCost, isOnlineServiceSelected, isLargerStorageSelected, isCustomizableProfileSelected, isPlanYearly]);

  return (
    <div>
        <StepHeader title={"Finishing up"} description={"Double-check everything looks OK before confirming."} />
        <div className="step-four-wrapper">
            <div className="step-four-wrapper__plan-summary">
                <div className="step-four-wrapper__plan-summary-details">
                    <span>{planName} {isPlanYearly ? "(Yearly)" : "(Monthly)"}</span>
                    <button className="step-four-wrapper__change-button" onClick={handleChangePlan}>Change</button>
                </div>
                {isPlanYearly ? (
                    <span className="step-four-wrapper__plan-summary-price">${planCost}/yr</span>
                ) : (
                    <span className="step-four-wrapper__plan-summary-price">${planCost}/mo</span>
                )}
            </div>
            <div className="step-four-wrapper__addons-summary">
                <hr />
                {isOnlineServiceSelected && (
                    <div className="step-four-wrapper__addon">
                        <span className="step-four-wrapper__addon-title">{addonDetails.online.name}</span>
                        {isPlanYearly ? (
                            <span>${addonDetails.online.yearly}/yr</span>
                        ) : (
                            <span>${addonDetails.online.monthly}/mo</span>
                        )}
                    </div>
                )}
                {isLargerStorageSelected && (
                    <div className="step-four-wrapper__addon">
                        <span className="step-four-wrapper__addon-title">{addonDetails.storage.name}</span>
                        {isPlanYearly ? (
                            <span>${addonDetails.storage.yearly}/yr</span>
                        ) : (
                            <span>${addonDetails.storage.monthly}/mo</span>
                        )}
                    </div>
                )}
                {isCustomizableProfileSelected && (
                    <div className="step-four-wrapper__addon">
                        <span className="step-four-wrapper__addon-title">{addonDetails.profile.name}</span>
                        {isPlanYearly ? (
                            <span>${addonDetails.profile.yearly}/yr</span>
                        ) : (
                            <span>${addonDetails.profile.monthly}/mo</span>
                        )}
                    </div>
                )}
            </div>
            <div className="step-four-wrapper__total">
                <span className="step-four-wrapper__addon-title">Total {isPlanYearly ? "(per year)" : "(per month)"}</span>
                {isPlanYearly ? (
                    <span className="step-four-wrapper__total-price">${totalCost}/yr</span>
                ) : (        
                    <span className="step-four-wrapper__total-price">${totalCost}/mo</span>
                )}
            </div>
        </div>
    </div>
  )
}

export default StepFour;
