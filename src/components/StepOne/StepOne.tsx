import "./StepOne.css";
import StepHeader from "../StepHeader/StepHeader";
import { Dispatch, SetStateAction, ChangeEvent, useState } from "react";
import { validateEmail, validatePhone } from "../../utils/utils";

interface StepOneProps {
  setFormData: Dispatch<SetStateAction<{ stepOne: { name: string; email: string; phone: string; }; stepTwo: { plan: string; isYearly: boolean; }; stepThree: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean; }; }>>,
  formName: string,
  formEmail: string,
  formPhone: string,
  stepOneErrors: boolean,
}

function StepOne({ setFormData, formName, formEmail, formPhone, stepOneErrors }: StepOneProps) {
  const [errors, setErrors] = useState<{ name: string; email: string; phone: string }>({ name: '', email: '', phone: '' });
  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
  
    if (cleaned.length < 4) return cleaned;
    if (cleaned.length < 7) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData, 
      stepOne: {
        ...prevFormData.stepOne, 
        [name]: name === 'phone' ? formatPhoneNumber(value) : value,
      }
    }));

    if (name === 'email' && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: 'e.g. name@gmail.com' }));
    } else if (name === 'phone' && !validatePhone(formatPhoneNumber(value))) {
      setErrors((prev) => ({ ...prev, phone: 'e.g. (123) 123-1122' }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' })); 
    }
  };

  const handleEmailValidation = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email' && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: 'e.g. name@gmail.com' }));
    }
  }

  return (
    <div className="form-wrapper">
      <StepHeader title={"Personal Info"} description={"Please provide your name, email, address, and phone number."} />
      <form className="step-one-form">
        <div className="step-one-form__input-group">
          {stepOneErrors && formName.trim().length < 1 && (
            <span className="step-one-form__error">This field is required</span>
          )}
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" placeholder="e.g. Your Name" onChange={handleChange} value={formName} className={stepOneErrors && formName.trim().length < 1 ? 'error' : ''} />
        </div>
        <div className="step-one-form__input-group">
          {stepOneErrors && (formEmail.trim().length < 1 || errors.email) && (
            <span className="step-one-form__error">{errors.email || 'This field is required'}</span>
          )}
          <label htmlFor="email">Email Address *</label>
          <input type="text" id="email" name="email" placeholder="e.g. name@gmail.com" value={formEmail} onChange={handleChange} onBlur={handleEmailValidation} className={stepOneErrors && (formEmail.trim().length < 1 || errors.email) ? 'error' : ''} />
        </div>
        <div className="step-one-form__input-group">
          {stepOneErrors && (formPhone.trim().length < 1 || errors.phone) && (
            <span className="step-one-form__error">{errors.phone || 'This field is required'}</span>
          )}
          <label htmlFor="phone">Phone Number *</label>
          <input type="text" id="phone" name="phone" placeholder="e.g. (123) 123-1122" value={formPhone} onChange={handleChange} className={stepOneErrors && (formPhone.trim().length < 1 || errors.phone) ? 'error' : ''} />
        </div>
      </form>
    </div>
  )
}

export default StepOne;
