import "./StepTwo.css"

function MonthlyYearlySelector() {

  return (
    <div className="monthly-yearly-selector">
        <span>Monthly</span>
        <input type="checkbox" id="switch" className="monthly-yearly-selector__input" /><label htmlFor="switch" className="monthly-yearly-selector__label">Toggle</label>
        <span>Yearly</span>
    </div>
  )
}

export default MonthlyYearlySelector;
