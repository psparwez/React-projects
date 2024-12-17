import { useState } from "react";
import PropTypes from "prop-types";
const InputField = ({ type, placeholder, icon }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="input-wrapper">
      <input
        type={type === "password" && !showPassword ? "password" : "text"}
        className="input-field"
        placeholder={placeholder}
        required
      />
      <i className="material-symbols-rounded">{icon}</i>
      {type === "password" && (
        <i
          onClick={handleTogglePassword}
          className={`material-symbols-rounded eye-icon ${
            showPassword ? "visibility" : "visibility_off"
          }`}
        >
          {showPassword ? "visibility" : "visibility_off"}
        </i>
      )}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password"]),
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default InputField;
