import "./StepThree.css";
import AddonButton from "./AddonButton";
import StepHeader from "../StepHeader/StepHeader";
import { Dispatch, SetStateAction } from "react";
import { addonDetails } from "../../App";

interface StepThreeProps {
    setFormData: Dispatch<SetStateAction<{ stepOne: { name: string; email: string; phone: string; }; stepTwo: { plan: string; isYearly: boolean; }; stepThree: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean; }; }>>,
    onlineService: boolean,
    largerStorage: boolean,
    customizableProfile: boolean,
    isPlanYearly: boolean,
    totalCost: number,
    setTotalCost: Dispatch<SetStateAction<number>>,
}

function StepThree({ setFormData, onlineService, largerStorage, customizableProfile, isPlanYearly }: StepThreeProps) {

  return (
    <div>
        <StepHeader title={"Pick add-ons"} description={"Add-ons help enhance your gaming experience."} />
        <div className="step-three-wrapper">
            <AddonButton
                addonName="Online Service"
                checkboxId="onlineService"
                addonDescription="Access to multiplayer games"
                addonPrice={isPlanYearly ? `$${addonDetails.online.yearly}/yr` : `$${addonDetails.online.monthly}/mo`}
                setFormData={setFormData}
                isPlanSelected={onlineService}
            />
            <AddonButton
                addonName="Larger Storage"
                checkboxId="largerStorage"
                addonDescription="Extra 1TB of cloud save"
                addonPrice={isPlanYearly ? `$${addonDetails.storage.yearly}/yr` : `$${addonDetails.storage.monthly}/mo`}
                setFormData={setFormData}
                isPlanSelected={largerStorage}
            />
            <AddonButton
                addonName="Customizable Profile"
                checkboxId="customizableProfile"
                addonDescription="Custom theme on your profile"
                addonPrice={isPlanYearly ? `$${addonDetails.profile.yearly}/yr` : `$${addonDetails.profile.monthly}/mo`}
                setFormData={setFormData}
                isPlanSelected={customizableProfile}
            />
        </div>
    </div>
  )
}

export default StepThree;
