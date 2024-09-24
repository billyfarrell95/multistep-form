import "./StepThree.css";
import AddonButton from "./AddonButton";
import StepHeader from "../StepHeader/StepHeader";

function StepThree() {

  return (
    <div>
        <StepHeader title={"Pick add-ons"} description={"Add-ons help enhance your gaming experience."} />
        <div className="step-three-wrapper">
            <AddonButton
                addonName="Online Service"
                checkboxId="online-service"
                addonDescription="Access to multiplayer games"
                addonPrice="+10/yr"
            />
            <AddonButton
                addonName="Larger Storage"
                checkboxId="larger-storage"
                addonDescription="Extra 1TB of cloud save"
                addonPrice="+20/yr"
            />
            <AddonButton
                addonName="Customizable Profile"
                checkboxId="customizable-profile"
                addonDescription="Custom theme on your profile"
                addonPrice="+20/yr"
            />
        </div>
    </div>
  )
}

export default StepThree;
