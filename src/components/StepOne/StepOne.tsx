import "./StepOne.css";
import StepHeader from "../StepHeader/StepHeader";
import { Dispatch, SetStateAction, ChangeEvent } from "react";

interface StepOneProps {
  setFormData: Dispatch<SetStateAction<{ stepOne: { name: string; email: string; phone: string; }; stepTwo: { plan: string; monthly: boolean; yearly: boolean; }; stepThree: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean; }; }>>,
  formName: string,
  formEmail: string,
  formPhone: string,
  stepOneErrors: boolean,
}

function StepOne({ setFormData, formName, formEmail, formPhone, stepOneErrors }: StepOneProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData, 
      stepOne: {
        ...prevFormData.stepOne, 
        [name]: value,           
      }
    }));
  };
  return (
    <div className="form-wrapper">
        <StepHeader title={"Personal Info"} description={"Please provide your name, email, address, and phone number."} />
      <form className="step-one-form">
        <div className="step-one-form__input-group">
            {stepOneErrors && formName.trim().length < 1 && (
              <span className="step-one-form__error">This field is required</span>
            )}
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" placeholder="e.g. Your Name" onChange={handleChange} value={formName} />
        </div>
        <div className="step-one-form__input-group">
            {stepOneErrors && formEmail.trim().length < 1 && (
              <span className="step-one-form__error">This field is required</span>
            )}
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" placeholder="e.g. name@gmail.com" value={formEmail} onChange={handleChange} />
        </div>
        <div className="step-one-form__input-group">
            {stepOneErrors && formPhone.trim().length < 1 && (
              <span className="step-one-form__error">This field is required</span>
            )}
            <label htmlFor="phone">Phone Number *</label>
            <input type="text" id="phone" name="phone" placeholder="e.g. 123-123-1122" value={formPhone} onChange={handleChange} />
        </div>
      </form>
    </div>
  )
}

export default StepOne;
