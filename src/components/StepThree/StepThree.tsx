import "./StepThree.css";
import AddonButton from "./AddonButton";
import StepHeader from "../StepHeader/StepHeader";
import { Dispatch, SetStateAction } from "react";

interface StepThreeProps {
    setFormData: Dispatch<SetStateAction<{ stepOne: { name: string; email: string; phone: string; }; stepTwo: { plan: string; isYearly: boolean; }; stepThree: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean; }; }>>,
    onlineService: boolean,
    largerStorage: boolean,
    customizableProfile: boolean,
}

function StepThree({ setFormData, onlineService, largerStorage, customizableProfile}: StepThreeProps) {

  return (
    <div>
        <StepHeader title={"Pick add-ons"} description={"Add-ons help enhance your gaming experience."} />
        <div className="step-three-wrapper">
            <AddonButton
                addonName="Online Service"
                checkboxId="onlineService"
                addonDescription="Access to multiplayer games"
                addonPrice="+10/yr"
                setFormData={setFormData}
                isPlanSelected={onlineService}
            />
            <AddonButton
                addonName="Larger Storage"
                checkboxId="largerStorage"
                addonDescription="Extra 1TB of cloud save"
                addonPrice="+20/yr"
                setFormData={setFormData}
                isPlanSelected={largerStorage}
            />
            <AddonButton
                addonName="Customizable Profile"
                checkboxId="customizableProfile"
                addonDescription="Custom theme on your profile"
                addonPrice="+20/yr"
                setFormData={setFormData}
                isPlanSelected={customizableProfile}
            />
        </div>
    </div>
  )
}

export default StepThree;
