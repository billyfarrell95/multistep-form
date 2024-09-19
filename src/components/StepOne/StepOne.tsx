import "./StepOne.css";
import StepHeader from "../StepHeader/StepHeader";

function StepOne() {

  return (
    <div className="form-wrapper">
        <StepHeader title={"Personal Info"} description={"Please provide your name, email, address, and phone number."} />
      <form className="step-one-form">
        <div className="step-one-form__input-group">
            <span className="step-one-form__error">This field is required</span>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="e.g. Your Name" required />
        </div>
        <div className="step-one-form__input-group">
            <span className="step-one-form__error">This field is required</span>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="e.g. name@gmail.com" required />
        </div>
        <div className="step-one-form__input-group">
            <span className="step-one-form__error">This field is required</span>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="e.g. 123-123-1122" required />
        </div>
      </form>
    </div>
  )
}

export default StepOne;
