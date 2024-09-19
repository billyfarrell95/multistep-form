interface PlanSelectorProps {
    iconPath: string,
    planName: string,
    planPrice: number,
}

function PlanSelector({ iconPath, planName, planPrice }: PlanSelectorProps) {

  return (
    <>
       <button className="plan-selector-btn">
            <img src={iconPath} alt="" />
            <div className="plan-selector-btn__details">
                <span className="plan-selector-btn__name">{planName}</span>
                <span className="plan-selector-btn__price">${planPrice}/mo</span>
            </div>
        </button>
    </>
  )
}

export default PlanSelector;
