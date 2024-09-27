import "./StepFive.css";
import thankYouIcon from "../../assets/images/icon-thank-you.svg"

function StepFive() {

  return (
    <div className="step-five-wrapper">
        <img src={thankYouIcon} alt="" />
        <h2>Thank you!</h2>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default StepFive;
