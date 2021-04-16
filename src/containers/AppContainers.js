import React, { useState } from "react";

import App from "../component/App";

const AppContainers = ({ data }) => {
  const [checkboxes, setCheckboxes] = useState(data);
  const [checkedAll, setCheckedAll] = useState(false);

  /**
   * If no checkboxes no return component
   */
  if (!checkboxes) {
    return <h1>No Data</h1>;
  }

  /**
   * Function for Select or Unselect Checkbox
   */
  const handleChange = (e) => {
    const { value, checked } = e.target;
    /**
     * Copy of state checkboxes
     */
    let newCheckboxes = [...checkboxes];
    /**
     * Copy of state checkedAll
     */
    let allChecked = checkedAll;

    if (value === 'checkedAll') {
      newCheckboxes.forEach((item) => item.isChecked = checked);
      allChecked = checked;
    } else {
      newCheckboxes.find((item) => item.value === value).isChecked = checked;
      /**
       * Looked if all items in newCheckboxes is checked
       * if true allchecked = true
       * if false allchecked = false
       */
      allChecked = newCheckboxes.every(item => item.isChecked === true);
    }
    /**
     * Set new value for checkedAll
     */
    setCheckedAll(allChecked);
    /**
     * Set new value for checkboxes
     */
    setCheckboxes(newCheckboxes);
  }

  return (
    <App
      checkboxes={checkboxes}
      handleChange={handleChange}
      checkedAll={checkedAll}
    />
  )
}
export default AppContainers;