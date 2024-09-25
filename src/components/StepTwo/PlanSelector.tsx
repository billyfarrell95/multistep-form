interface PlanSelectorProps {
    iconPath: string,
    planName: string,
    planPrice: number,
    handlePlanSelection: (planSelection: string) => void,
    activePlan: string,
}

function PlanSelector({ iconPath, planName, planPrice, handlePlanSelection, activePlan }: PlanSelectorProps) {

  return (
    <>
       <button className={`${activePlan === planName ? 'plan-selector-btn active' : 'plan-selector-btn'}`} onClick={() => handlePlanSelection(planName)}>
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
