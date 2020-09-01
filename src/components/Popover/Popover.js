import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MARGIN = 10;

const Popover = ({
  trigger,
  align,
  children,

  ...props
}) => {
  const tooltipRef = useRef(null);

  const onMouseEnter = (e) => {
    const dim = e.target.getBoundingClientRect();
    const tooltipEl = tooltipRef.current;

    tooltipEl.style.display = 'inline-block';

    let top;
    let left;

    switch (align) {
      case 'top':
        top = dim.top - tooltipEl.clientHeight - MARGIN * 2;
        left = dim.left + (dim.width - tooltipEl.clientWidth) / 2;
        break;
      case 'bottom':
        top = dim.top + dim.height;
        left = dim.left + (dim.width - tooltipEl.clientWidth) / 2;
        break;
      case 'left':
        top = dim.top + (dim.height - tooltipEl.clientHeight - MARGIN * 2) / 2;
        left = dim.left - tooltipEl.clientWidth - MARGIN * 2;
        break;
      case 'right':
        top = dim.top + (dim.height - tooltipEl.clientHeight - MARGIN * 2) / 2;
        left = dim.left + dim.width;
        break;
    }

    tooltipEl.style.top = `${top}px`;
    tooltipEl.style.left = `${left}px`;
    tooltipEl.style.margin = `${MARGIN}px`;
  };

  const onMouseLeave = () => {
    tooltipRef.current.style.display = 'none';
  };

  return (
    <>
      {React.cloneElement(trigger, { onMouseEnter, onMouseLeave })}
      <div ref={tooltipRef} {...props}>
        {children}
      </div>
    </>
  );
};

const StyledPopover = styled(Popover)`
  z-index: 3;
  padding: 10px;
  border-radius: 5px;
  display: none;
  position: fixed;
  font-family: 'Manrope';
  font-size: 14px;
  border: 1px solid #e4e4e4;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
`;

StyledPopover.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  align: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

StyledPopover.defaultProps = { align: 'bottom' };

export default StyledPopover;
