import PropTypes from "prop-types";

const Input = ({ onChange, placeholder, type, refs }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="py-1 px-2 w-[270px]"
      min={0}
      ref={refs}
    />
  );
};

export default Input;

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  refs: PropTypes.object,
};
