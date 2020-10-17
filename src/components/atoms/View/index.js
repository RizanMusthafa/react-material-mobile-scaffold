import React from 'react';
import PropTypes from 'prop-types';

function View(props) {
  return (
    <div {...props} className={`${props.className} view-div`}>
      {props.children}
    </div>
  );
}

View.propTypes = {
  className: PropTypes.string,
};

View.defaultProps = {
  className: '',
};

export default View;
