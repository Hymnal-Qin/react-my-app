import styled from 'styled-components';
import PropTypes from 'prop-types';

//样式组件
const GridCell = styled.div`
	flex: 1;
	${(props) => props.justifyRight ? 'justify-content: flex-end' : ''};
	${(props) => props.justifyCenter ? 'justify-content: center' : ''};

	${(props) => props.alignTop ? 'align-self: flex-start' : ''};
	${(props) => props.alignBottom ? 'align-self: flex-end' : ''};
	${(props) => props.alignCenter ? 'align-self: center' : ''};

	${(props) => props.gutter ? 'padding-left: 1em' : 'padding-left: 0'};
`;

GridCell.propTypes = {
	justifyRight: PropTypes.bool,
	justifyCenter: PropTypes.bool,

	alignTop: PropTypes.bool,
	alignBottom: PropTypes.bool,
	alignCenter: PropTypes.bool,

	gutter: PropTypes.bool,
};

GridCell.defaultProps = {
	justifyRight: false,
	justifyCenter: false,

	alignTop: false,
	alignBottom: false,
	alignCenter: false,

	gutter: false,
};

export default GridCell;
