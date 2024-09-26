import { Dispatch, SetStateAction } from "react";
import "./StepTwo.css";

interface MonthlyYearlySelectorProps {
  isYearly: boolean,
  setIsyearly: Dispatch<SetStateAction<boolean>>
}

function MonthlyYearlySelector({ isYearly, setIsyearly }: MonthlyYearlySelectorProps) {
  const handleToggle = () => {
    setIsyearly((prev) => !prev);
  };

  return (
    <div className="monthly-yearly-selector">
        <span className={`${!isYearly ? 'monthly-yearly-selector__active' : ''}`}>Monthly</span>
        <input 
          type="checkbox" 
          id="switch" 
          className="monthly-yearly-selector__input" 
          checked={isYearly}
          onChange={handleToggle}
        />
        <label htmlFor="switch" className="monthly-yearly-selector__label">Toggle</label>
        <span className={`${isYearly ? 'monthly-yearly-selector__active' : ''}`}>Yearly</span>
    </div>
  )
}

export default MonthlyYearlySelector;
