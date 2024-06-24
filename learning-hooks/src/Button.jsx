import PropTypes from "prop-types";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-[#3b3e66] py-2 w-[120px] text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
