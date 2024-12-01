import PropTypes from "prop-types";
const Button = ({ action, fuc, label, className, children }) => {
  return (
    <button
      onClick={() => fuc(action)}
      aria-label={label}
      className={`btn ${className} `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.string.isRequired,
  fuc: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
