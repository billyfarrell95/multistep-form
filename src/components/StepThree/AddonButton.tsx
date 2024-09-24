import "./StepThree.css";

interface AddonButtonProps {
    addonName: string,
    checkboxId: string,
    addonDescription: string,
    addonPrice: string,
}

function AddonButton({checkboxId, addonName, addonDescription, addonPrice}: AddonButtonProps) {

  return (
    <button className="addon-btn">
        <div className="addon-btn__details">
            <input type="checkbox" name={addonName} id={checkboxId} className="addon-btn__checkbox" />
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
