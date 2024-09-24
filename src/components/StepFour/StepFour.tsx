import "./StepFour.css";
import StepHeader from "../StepHeader/StepHeader";
import { Dispatch, SetStateAction } from "react";

interface StepFourProps {
    setCurrentStep: Dispatch<SetStateAction<number>>,
}

function StepFour({ setCurrentStep }: StepFourProps) {

    const handleChangePlan = () => {
        setCurrentStep(2);
    }

  return (
    <div>
        <StepHeader title={"Finishing up"} description={"Double-check everything looks OK before confirming."} />
        <div className="step-four-wrapper">
            <div className="step-four-wrapper__plan-summary">
                <div className="step-four-wrapper__plan-summary-details">
                    <span>Plan name (Yearly or monthy)</span>
                    <button className="step-four-wrapper__change-button" onClick={handleChangePlan}>Change</button>
                </div>
                <span className="step-four-wrapper__plan-summary-price">$9/mo</span>
            </div>
            <div className="step-four-wrapper__addons-summary">
                <hr />
                <div className="step-four-wrapper__addon">
                    <span className="step-four-wrapper__addon-title">Online service</span>
                    <span>+$1/mo</span>
                </div>
                <div className="step-four-wrapper__addon">
                    <span className="step-four-wrapper__addon-title">Larger storage</span>
                    <span>+$2/mo</span>
                </div>
            </div>
            <div className="step-four-wrapper__total">
                <span className="step-four-wrapper__addon-title">Total (per month or year)</span>
                <span className="step-four-wrapper__total-price">$12/mo</span>
            </div>
        </div>
    </div>
  )
}

export default StepFour;
