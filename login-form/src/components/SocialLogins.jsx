import googleImage from "../assets/images/google.png";
import appleImage from "../assets/images/apple.png";

const SocialLogins = () => {
  return (
    <div className="social-login-buttons">
      <div className="social-button">
        <img src={googleImage} alt="Google logo" />
        <span>Google</span>
      </div>
      <div className="social-button">
        <img src={appleImage} alt="Apple logo" />
        <span>Apple</span>
      </div>
    </div>
  );
};

export default SocialLogins;
