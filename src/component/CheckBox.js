import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = ({
  handleChange,
  label,
  isChecked,
  value,
}) => {
  return (
    <div key={`div-${value}`}>
      <input
        type="checkbox"
        id={value}
        onChange={handleChange}
        checked={isChecked}
        value={value}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  )
}

CheckBox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  value: PropTypes.string.isRequired,
}

export default CheckBox

