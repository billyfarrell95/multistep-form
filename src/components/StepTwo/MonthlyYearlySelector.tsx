import { Dispatch, SetStateAction } from "react";
import "./StepTwo.css";

interface MonthlyYearlySelectorProps {
  isMonthly: boolean,
  setIsMonthly: Dispatch<SetStateAction<boolean>>
}

function MonthlyYearlySelector({ isMonthly, setIsMonthly }: MonthlyYearlySelectorProps) {
  const handleToggle = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <div className="monthly-yearly-selector">
        <span className={`${isMonthly ? 'monthly-yearly-selector__active' : ''}`}>Monthly</span>
        <input 
          type="checkbox" 
          id="switch" 
          className="monthly-yearly-selector__input" 
          checked={isMonthly}
          onChange={handleToggle}
        />
        <label htmlFor="switch" className="monthly-yearly-selector__label">Toggle</label>
        <span className={`${!isMonthly ? 'monthly-yearly-selector__active' : ''}`}>Yearly</span>
    </div>
  )
}

export default MonthlyYearlySelector;
