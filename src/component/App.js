import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from './CheckBox';

const App = ({ checkboxes, handleChange, checkedAll }) => (
  <div className="App">
    <header className="App-header">
      <h1>Test 1 Checkbox</h1>
    </header>
    <div>
      <div>
        <CheckBox
          key='checkedAll'
          value="checkedAll"
          label="Check All"
          isChecked={checkedAll}
          handleChange={handleChange}
        />
      </div>
      <br />
      {
        checkboxes.map((item) => (
          <CheckBox
            key={item.value}
            handleChange={handleChange}
            {...item}
          />
        ))
      }
    </div>
  </div>
);

App.propTypes = {
  handleChange: PropTypes.func.isRequired,
  checkboxes: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  checkedAll: PropTypes.bool.isRequired,
}

export default App;
