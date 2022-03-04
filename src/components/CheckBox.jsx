import { useRef } from "react";
import PropTypes from "prop-types";

import { BiCheck } from 'react-icons/bi'

const CheckBox = (props) => {

  const inputRef = useRef(null)

  const onChange = () => {
    if(props.onChangeCheckbox) {
      props.onChangeCheckbox(inputRef.current)
      // console.log(inputRef.current.checked)
    }
  }

  // console.log(props.checked) // always undefined


  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChange}
        checked={props.checked}
      />
      <span className="custom-checkbox__checkmark">
        <BiCheck />
      </span>
      {props.label}
    </label>
  );
};


CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default CheckBox;
