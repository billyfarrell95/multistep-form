import "./StepFour.css";
import StepHeader from "../StepHeader/StepHeader";
import ChangeButton from "./ChangeButton";

function StepFour() {

  return (
    <div>
        <StepHeader title={"Finishing up"} description={"Double-check everything looks OK before confirming."} />
        <div className="step-four-wrapper">
            <div className="step-four-wrapper__plan-summary">
                <div className="step-four-wrapper__plan-summary-details">
                    <span>Plan name (Yearly or monthy)</span>
                    <ChangeButton />
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
