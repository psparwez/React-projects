import InputField from "./components/InputFields";
import SocialLogins from "./components/SocialLogins";

const App = () => {
  return (
    <div className="container">
      <h2 className="login-title">Log in with</h2>
      <SocialLogins />
      <p className="separator">
        <span>Or</span>
      </p>

      <form className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />

        <a href="" className="forget-password">
          Forgot password?
        </a>

        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      <p className="signup-text">
        Don&apos;t have an account? <a href="">Sign up now</a>
      </p>
    </div>
  );
};

export default App;
