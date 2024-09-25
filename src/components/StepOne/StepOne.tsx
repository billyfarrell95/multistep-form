import "./StepOne.css";
import StepHeader from "../StepHeader/StepHeader";
import { Dispatch, SetStateAction, ChangeEvent, useState } from "react";

interface StepOneProps {
  setFormData: Dispatch<SetStateAction<{ stepOne: { name: string; email: string; phone: string; }; stepTwo: { plan: string; monthly: boolean; yearly: boolean; }; stepThree: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean; }; }>>,
  formName: string,
  formEmail: string,
  formPhone: string,
  stepOneErrors: boolean,
}

function StepOne({ setFormData, formName, formEmail, formPhone, stepOneErrors }: StepOneProps) {
  const [errors, setErrors] = useState<{ name: string; email: string; phone: string }>({ name: '', email: '', phone: '' });

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  // @todo: fix phone number display/validation to work with () around area code
  const validatePhone = (phone: string) => /^\d{3}-\d{3}-\d{4}$/.test(phone);

  const formatPhoneNumber = (value: string) => {
    const formatted = value.replace(/\D/g, '');

    if (formatted.length < 4) return formatted;
    if (formatted.length < 7) return `${formatted.slice(0, 3)}-${formatted.slice(3)}`;
    return `${formatted.slice(0, 3)}-${formatted.slice(3, 6)}-${formatted.slice(6, 10)}`;
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
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
    } else if (name === 'phone' && !validatePhone(formatPhoneNumber(value))) {
      setErrors((prev) => ({ ...prev, phone: 'Enter a valid number (e.g. 123-123-1122)' }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' })); 
    }
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
          {stepOneErrors && (formEmail.trim().length < 1 || errors.email) && (
            <span className="step-one-form__error">{errors.email || 'This field is required'}</span>
          )}
          <label htmlFor="email">Email Address *</label>
          <input type="text" id="email" name="email" placeholder="e.g. name@gmail.com" value={formEmail} onChange={handleChange} />
        </div>
        <div className="step-one-form__input-group">
          {stepOneErrors && (formPhone.trim().length < 1 || errors.phone) && (
            <span className="step-one-form__error">{errors.phone || 'This field is required'}</span>
          )}
          <label htmlFor="phone">Phone Number *</label>
          <input type="text" id="phone" name="phone" placeholder="e.g. 123-123-1122" value={formPhone} onChange={handleChange} />
        </div>
      </form>
    </div>
  )
}

export default StepOne;
