import 'bootstrap/dist/css/bootstrap.min.css';
import SignupForm from './components/SignupForm/SignupForm.tsx';
import './App.css';

function App() {
  return (
    <div className="form-container">
      <div className="signup-card">
        <SignupForm />
      </div>
    </div>
  );
}

export default App;