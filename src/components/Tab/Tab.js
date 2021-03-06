import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tab = ({
  panes,
  activeTab,
  onChange,

  ...props
}) => {
  const activePane = panes.find((pane) => pane.menuItem === activeTab);

  return (
    <div {...props}>
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

const StyledTab = styled(Tab)`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: ${(props) => props.theme.fontWeightMedium};
    display: flex;
  }

  li {
    margin: 0 ${(props) => props.theme.gutter};
    padding: ${(props) => props.theme.gutter};
    cursor: pointer;

    &.active {
      border-bottom: 3px solid ${(props) => props.theme.linkPrimary};
      cursor: not-allowed;
      pointer-events: none;
    }

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme.linkPrimaryHover};
    }
  }

  .tab-pane {
    padding: ${(props) => props.theme.gutter};
  }
`;

StyledTab.propTypes = {
  className: PropTypes.string,
  panes: PropTypes.arrayOf(
    PropTypes.shape({
      menuItem: PropTypes.string,
      render: PropTypes.func,
    }),
  ),
  activeTab: PropTypes.string,
  onChange: PropTypes.func,
};

StyledTab.defaultProps = {};

export default StyledTab;
