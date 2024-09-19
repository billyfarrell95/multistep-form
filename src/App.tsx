import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StepOne from './components/StepOne/StepOne';
import FormControls from './components/FormControls/FormControls';

function App() {

  return (
    <>
      <div className="main-wrapper">
        <Sidebar />
        <div className="step-wrapper">
          <StepOne />
          <FormControls />
        </div>
      </div>
    </>
  )
}

export default App
