interface PlanSelectorProps {
    iconPath: string,
    planName: string,
    planPrice: number,
    handlePlanSelection: (planSelection: string) => void,
    activePlan: string,
    isYearly: boolean,
}

function PlanSelector({ iconPath, planName, planPrice, handlePlanSelection, activePlan, isYearly }: PlanSelectorProps) {

  return (
    <>
       <button className={`${activePlan === planName ? 'plan-selector-btn active' : 'plan-selector-btn'}`} onClick={() => handlePlanSelection(planName)}>
            <img src={iconPath} alt="" />
            <div className="plan-selector-btn__details">
                <span className="plan-selector-btn__name">{planName}</span>
                {isYearly === true ? (
                  <>
                  <span className="plan-selector-btn__price">${planPrice}/yr</span>
                  <span className="plan-selector-btn__promo">2 months free</span>
                  </>
                ) : (
                  <span className="plan-selector-btn__price">${planPrice}/mo</span>
                )}
            </div>
        </button>
    </>
  )
}

export default PlanSelector;
