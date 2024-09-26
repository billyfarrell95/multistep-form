import "./StepThree.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface AddonButtonProps {
    addonName: string,
    checkboxId: string,
    addonDescription: string,
    addonPrice: string,
    setFormData: Dispatch<SetStateAction<{ stepOne: { name: string; email: string; phone: string; }; stepTwo: { plan: string; isYearly: boolean; }; stepThree: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean; }; }>>,
    isPlanSelected: boolean,
  }

function AddonButton({checkboxId, addonName, addonDescription, addonPrice, setFormData, isPlanSelected }: AddonButtonProps) {

  const [isAddonSelected, setIsAddonSelected] = useState(isPlanSelected);

  const handleChange = () => {
    setIsAddonSelected(!isAddonSelected)
  };

  const handleClick = () => {
    handleChange()
  }

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData, 
      stepThree: {
        ...prevFormData.stepThree, 
        [checkboxId]: isAddonSelected,
      }
    }));
  }, [isAddonSelected])

  return (
    <button className={`${isAddonSelected? 'addon-btn active' : 'addon-btn'}`} onClick={handleClick}>
        <div className="addon-btn__details">
            <input 
              type="checkbox" 
              name={addonName} 
              id={checkboxId} 
              checked={isPlanSelected} 
              onChange={handleChange} 
              className="addon-btn__checkbox" />
            <div>
                <p className="addon-btn__name">{addonName}</p>
                <p className="addon-btn__description">{addonDescription}</p>
            </div>
        </div>
        <span className="addon-btn__price">{addonPrice}</span>
    </button>
  )
}

export default AddonButton;
