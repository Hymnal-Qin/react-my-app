import styled from "styled-components";
import PropTypes from "prop-types";

const GridCell = styled.div`
	flex: 1;
	${props => (props.alignTop ? "align-self: flex-start" : "")};
	${props => (props.alignBottom ? "align-self: flex-end" : "")};
	${props => (props.alignCenter ? "align-self: center" : "")};
	${props => (props.justifyRight ? "justify-content: flex-end" : "")};
	${props => (props.justifyCenter ? "justify-content: center" : "")};
	${props => (props.gutter ? "padding-left: 1em" : "padding-left: 0")};
`;

GridCell.propTypes = {
	alignTop: PropTypes.bool,
	alignBottom: PropTypes.bool,
	alignCenter: PropTypes.bool,
	justifyRight: PropTypes.bool,
	justifyCenter: PropTypes.bool,
	gutter: PropTypes.bool
};

GridCell.defaultProps = {
	alignTop: false,
	alignBottom: false,
	alignCenter: false,
	justifyRight: false,
	justifyCenter: false,
	gutter: false
};

export default GridCell;
