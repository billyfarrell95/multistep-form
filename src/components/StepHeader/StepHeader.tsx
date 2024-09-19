import "./StepHeader.css"

interface StepHeaderProps {
    title: string,
    description: string,
}

function StepHeader({title, description}: StepHeaderProps) {

  return (
    <div className="step-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default StepHeader;
