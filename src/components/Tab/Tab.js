import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Tab.css';

const Tab = ({
  className,
  style = {},
  panes,
  activeTab,
  onChange,

  ...props
}) => {
  let styles = { ...style };

  const classNames = ['tab', className];
  const activePane = panes.find((pane) => pane.menuItem === activeTab);

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      <ul>
        {panes.map((pane) => (
          <li
            className={pane.menuItem === activeTab ? 'active' : ''}
            key={pane.menuItem}
            onClick={(e) => onChange(pane.menuItem)}
          >
            {pane.menuItem}
          </li>
        ))}
      </ul>
      <div className="tab-pane">{activePane.render()}</div>
    </div>
  );
};

Tab.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  panes: PropTypes.arrayOf(
    PropTypes.shape({
      menuItem: PropTypes.string,
      render: PropTypes.func,
    }),
  ),
  activeTab: PropTypes.string,
  onChange: PropTypes.func,
};

export default Tab;
