import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

// Styles
import typography from '../../styles/typography';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const GlobalStyle = createGlobalStyle`
    @import 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap';

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        overflow: hidden;
        height: 100%;
        width: 100%;     
    }

    fontFamily={fonts.manrope}
    fontColor={colors.textPrimary}
    fontSize={typography.fontSizeBody}
    fontWeight={typography.fontWeightRegular}

    body {                
        color: ${(props) => props.fontColor};
        font-size: ${(props) => props.fontSize};  
        font-weight: ${(props) => props.fontWeight};  
        font-family: ${(props) => props.fontFamily};  
    }
`;

GlobalStyle.propTypes = {
  fontFamily: PropTypes.string,
  fontColor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
};

GlobalStyle.defaultProps = {
  fontFamily: fonts.manrope,
  fontColor: colors.textPrimary,
  fontSize: typography.fontSizeBody,
  fontWeight: typography.fontWeightRegular,
};

export default GlobalStyle;
