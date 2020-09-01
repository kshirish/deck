import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Card from './Card';

const Image = ({
  src,
  alt,

  ...props
}) => (
  <div {...props}>
    <img src={src} alt={alt} />
  </div>
);

const StyledImage = styled(Image)`
  img {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  ${Card}.horizontal & {
    flex: 1;

    img {
      border-top-right-radius: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 0;
      height: 100%;
    }
  }
`;

StyledImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

StyledImage.defaultProps = {};

export default StyledImage;
