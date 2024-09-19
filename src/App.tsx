import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import FormControls from './components/FormControls/FormControls';

function App() {

  return (
    <>
      <div className="main-wrapper">
        <Sidebar />
        <div className="step-wrapper">
            {/* <StepOne /> */}
            <StepTwo />
          <FormControls />
        </div>
      </div>
    </>
  )
}

export default App
