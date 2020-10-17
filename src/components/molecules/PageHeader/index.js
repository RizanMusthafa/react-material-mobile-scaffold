import React from 'react';
import PropTypes from 'prop-types';

function PageHeader(props) {
  return (
    <div>
      <h4>{props.title}</h4>
    </div>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  title: '',
};

export default PageHeader;
