import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Divider = (props) => <div {...props}>/</div>;

const StyledDivider = styled(Divider)`
  padding: 0 5px;
  display: inline-block;
`;

StyledDivider.propTypes = {
  className: PropTypes.string,
};

StyledDivider.defaultProps = {};

export default StyledDivider;
