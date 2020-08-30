import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Popover.css';

const margin = 10;

const Popover = ({
  className,
  style = {},
  trigger,
  align = 'bottom',
  children,

  ...props
}) => {
  const styles = { ...style };

  const tooltipRef = useRef(null);
  const classNames = ['popover', className];

  const onMouseEnter = (e) => {
    const dim = e.target.getBoundingClientRect();
    const tooltipEl = tooltipRef.current;

    tooltipEl.style.display = 'inline-block';

    let top;
    let left;

    switch (align) {
      case 'top':
        top = dim.top - tooltipEl.clientHeight - margin * 2;
        left = dim.left + (dim.width - tooltipEl.clientWidth) / 2;
        break;
      case 'bottom':
        top = dim.top + dim.height;
        left = dim.left + (dim.width - tooltipEl.clientWidth) / 2;
        break;
      case 'left':
        top = dim.top + (dim.height - tooltipEl.clientHeight - margin * 2) / 2;
        left = dim.left - tooltipEl.clientWidth - margin * 2;
        break;
      case 'right':
        top = dim.top + (dim.height - tooltipEl.clientHeight - margin * 2) / 2;
        left = dim.left + dim.width;
        break;
      default:
    }

    tooltipEl.style.top = `${top}px`;
    tooltipEl.style.left = `${left}px`;
    tooltipEl.style.margin = `${margin}px`;
  };

  const onMouseLeave = () => {
    tooltipRef.current.style.display = 'none';
  };

  return (
    <>
      {React.cloneElement(trigger, { onMouseEnter, onMouseLeave })}
      <div
        ref={tooltipRef}
        className={classNames.join(' ')}
        style={styles}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

Popover.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  align: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

export default Popover;
